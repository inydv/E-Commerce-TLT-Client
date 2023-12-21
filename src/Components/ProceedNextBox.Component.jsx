// REACT AND REACT ROUTER DOM
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM IMPORTS
import RSCoversion from "../Pipes/RSConversion.Pipe";
import { Form, MUIDialog } from "../Shared/index";
import ShippingFormConstant from "../Constants/ShippingForm.Constant.json";
import {
  GETRAZORPAYKEYID,
  RAZORPAYCREATEORDER,
  VERIFYPAYMENT,
} from "../Services/index";
import RouteConstant from "../Constants/Routes.Constant.json";

// PROCEED NEXT BOX
export default function ProceedNextBox({ cart, shippingCharges = 0 }) {
  // STATES
  const [subTotal, setSubTotal] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({});
  const [razorpayKeyId, setRazorpayKeyId] = useState();

  // USE NAVIGATE
  const navigate = useNavigate();

  // CUSTOM FUNCTION
  const handleAddress = () => {
    localStorage.setItem("address", JSON.stringify(formData));
    setOpenDialog(false);
  };

  const handlePayment = () => {
    razorpayCreateOrder();
  };

  const handleRazorpay = (orderId) => {
    const options = {
      key: razorpayKeyId,
      amount: shippingCharges + subTotal,
      currency: "INR",
      name: "The Little Things",
      description: "This is Simple but exciting E-commerce WebApp",
      image: "/src/Assets/logo.svg",
      order_id: orderId,
      prefill: {
        name: formData?.name,
        email: formData?.email,
        contact: formData?.phone,
      },
      notes: {
        address: `${formData?.address}, ${formData?.city}, ${formData?.state}, ${formData?.pincode}`,
      },
      theme: {
        color: "#000000",
      },
      handler: async function (response) {
        const reqBody = {
          paymentInfo: {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          },
          shippingInformation: formData,
          orderItems: cart?.map((item) => {
            return {
              product: item.product._id,
              quantity: item.quantity,
            };
          }),
        };

        const { data } = await VERIFYPAYMENT(reqBody);
        if (data && data.SUCCESS) {
          localStorage.removeItem("cart");
          navigate(RouteConstant.myOrders);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const razorpayCreateOrder = async () => {
    const { data } = await RAZORPAYCREATEORDER({
      amount: shippingCharges + subTotal,
    });
    if (data && data.SUCCESS) {
      handleRazorpay(data?.DATA?.id);
    }
  };

  const getKeyId = async () => {
    const { data } = await GETRAZORPAYKEYID();
    if (data && data.SUCCESS) {
      setRazorpayKeyId(data?.DATA?.key_id);
    }
  };

  // USE EFFECT
  useEffect(() => {
    const checkTotalPrice = (total, item) => {
      return total + item?.quantity * item?.product?.price;
    };

    const subTotalPrice = cart?.reduce(checkTotalPrice, 0);
    setSubTotal(subTotalPrice || 0);
  }, [cart]);

  useEffect(() => {
    const Address = JSON.parse(localStorage.getItem("address")) || {};
    setFormData(Address);

    getKeyId();
  }, []);

  // JSX ELEMENT
  return (
    <div className="bg-customGray max-w-[400px] w-full p-5">
      <div className="flex justify-between gap-5 mb-3 sm:mb-5">
        <h1 className="font-semibold text-base sm:text-lg">Sub Total</h1>
        <p className="text-base sm:text-lg">{RSCoversion(subTotal)}</p>
      </div>
      <div className="flex justify-between gap-5 mb-3 sm:mb-5">
        <h1 className="font-semibold text-base sm:text-lg">Shipping Charges</h1>
        <p className="text-base sm:text-lg">{RSCoversion(shippingCharges)}</p>
      </div>
      <div className="flex justify-between gap-5 mb-5 sm:mb-10">
        <h1 className="font-semibold text-base sm:text-lg">Gross Total</h1>
        <p className="text-green-500 text-base sm:text-lg">
          {RSCoversion(shippingCharges + subTotal)}
        </p>
      </div>
      <div className="flex justify-end gap-5">
        <button
          className="font-semibold text-base py-2 px-4 bg-black"
          onClick={() => setOpenDialog(true)}
        >
          Address
        </button>
        <button
          className="font-semibold text-base py-2 px-4 bg-black"
          onClick={() => handlePayment()}
        >
          Payment
        </button>
      </div>
      <MUIDialog
        setOpen={setOpenDialog}
        open={openDialog}
        title={"Shipping Address"}
        content={
          <Form
            form={ShippingFormConstant}
            formData={formData}
            setFormData={setFormData}
          />
        }
        handleBtn={handleAddress}
        btnText={"Add"}
      />
    </div>
  );
}

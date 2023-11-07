// REACT AND REACT ROUTER DOM
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM IMPORTS
import UpdateCart from "../Pipes/Cart.Pipe";
import RSCoversion from "../Pipes/RSConversion.Pipe";
import { Form, MUIDialog } from "../Shared/index";
import ShippingFormConstant from "../Constants/ShippingForm.Constant.json";

// PROCEED NEXT BOX
export default function ProceedNextBox({ shippingCharges = 0 }) {
  // STATES
  const [subTotal, setSubTotal] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({});

  // LOCAL STORAGE
  const [cart] = UpdateCart([]);

  // USE NAVIGATE
  const navigate = useNavigate();

  // CUSTOM FUNCTION
  const handleAddress = () => {};

  const handlePayment = () => {
    const options = {
      key: "YOUR_KEY_ID",
      amount: DATA?.amount,
      currency: "INR",
      name: "The Little Things",
      description: "This is Simple but exciting E-commerce WebApp",
      image: "https://example.com/you_logo",
      order_id: DATA?.id,
      callback_url: "http://localhost:3000/api/v1/user/payment/vertification",
      prefill: {
        name: "Gaurav Kumar",
        email: "name@example.com",
        contact: "9685743012",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorepay(options);
    document.getElementById("rzp-button1").onclick = function (e) {
      rzp.open();
    };
  };

  // USE EFFECT
  useEffect(() => {
    const checkTotalPrice = (total, item) => {
      return total + item?.quantity * item?.product?.price;
    };

    const subTotalPrice = cart.reduce(checkTotalPrice, 0);
    setSubTotal(subTotalPrice);
  }, [cart]);

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

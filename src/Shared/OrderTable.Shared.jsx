// REACT AND REACT ROUTER DOM
import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import { NotAvailable } from "../Components/index";
import DateSplice from "../Pipes/Date.Pipe";
import Images from "../Assets/index";
import RoutesConstant from "../Constants/Routes.Constant.json";
import RSCoversion from "../Pipes/RSConversion.Pipe";
import { Form, MUIDialog } from "./index";
import ViewItemsConstant from "../Constants/ViewItems.Constant.json";
import FormConstant from "../Constants/EditForm.Constant.json";

// REACT ICONS
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// ORDER TABLE
export default function OrderTable({
  header,
  orders,
  isAdmin = false,
  setId,
  handleSubmit,
  formData,
  setFormData,
  isApiSuccessfull,
  setIsApiSuccessfull,
}) {
  // STATES
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogState, setDialogState] = useState({
    viewData: null,
    displayName: "",
    openForEdit: false,
  });

  // USE EFFECT
  useEffect(() => {
    if (isApiSuccessfull) {
      setOpenDialog(false);
      setIsApiSuccessfull(false);
    }
  }, [isApiSuccessfull, setIsApiSuccessfull]);

  // JSX ELEMENT
  return (
    <table className="table-width">
      <thead>
        <tr>
          {Children.toArray(
            header?.map((name) => <th className="td-border p-2">{name}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {orders?.length > 0 ? (
          Children.toArray(
            orders?.map((item) => (
              <tr>
                <td className="td-border p-2">
                  {Children.toArray(
                    item?.orderItems?.map(({ quantity, product }, index) => (
                      <div
                        className={`grid gap-5 grid-flow-col ${
                          index !== item?.orderItems?.length - 1 && "mb-4"
                        }`}
                      >
                        <LazyLoadImage
                          src={
                            product?.images?.length > 0 &&
                            product?.images[0]?.url
                          }
                          alt={product?.name}
                          className="h-14 w-14 aspect-square"
                          effect="blur"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = Images["NoImageAvailable"];
                          }}
                        />
                        <div>
                          <h1 className="line-clamp mb-1">
                            <Link
                              to={
                                RoutesConstant.productDetails +
                                "/" +
                                product?._id
                              }
                            >
                              {product?.name}
                            </Link>
                          </h1>
                          <h1>
                            {RSCoversion(product?.price)} x {quantity} ={" "}
                            {RSCoversion(product?.price * quantity)}
                          </h1>
                        </div>
                      </div>
                    ))
                  )}
                </td>
                <td className="td-border p-2">
                  <p className="text-center">
                    Name: {item?.shippingInformation?.name} <br />
                    Phone: {item?.shippingInformation?.phone} <br />
                    Email: {item?.shippingInformation?.email}
                  </p>
                </td>
                <td className="td-border p-2">
                  <p className="text-center">
                    {item?.shippingInformation?.address +
                      ", " +
                      item?.shippingInformation?.city +
                      ", " +
                      item?.shippingInformation?.state +
                      ", " +
                      item?.shippingInformation?.pincode}
                  </p>
                </td>
                <td className="td-border p-2">
                  <p className="text-center">{item?.status}</p>
                </td>
                <td className="td-border p-2">
                  <p className="text-center">
                    Created At: {DateSplice(item?.createdAt)} <br />
                    Delivery At: {DateSplice(item?.deliveredAt)}
                  </p>
                </td>
                {isAdmin && (
                  <td className="td-border p-2">
                    <div className="flex gap-5 justify-center items-center">
                      <AiFillEye
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {
                          setDialogState({
                            displayName: "View Order",
                            openForEdit: false,
                            viewData: item,
                          });
                          setOpenDialog(true);
                        }}
                      />
                      <MdModeEdit
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {
                          setDialogState({
                            displayName: "Edit Order",
                            openForEdit: true,
                            viewData: item,
                          });
                          setId(item?._id);
                          setOpenDialog(true);
                        }}
                      />
                    </div>
                  </td>
                )}
              </tr>
            ))
          )
        ) : (
          <tr>
            <td colSpan="100%" className="td-border px-5 py-10">
              <NotAvailable />
            </td>
          </tr>
        )}
      </tbody>
      <MUIDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={dialogState?.displayName}
        content={
          dialogState?.openForEdit ? (
            <Form
              submitForm={handleSubmit}
              form={FormConstant["order"]}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <Form
              formData={dialogState?.viewData}
              form={ViewItemsConstant["order"]}
              ViewForm={true}
            />
          )
        }
      />
    </table>
  );
}

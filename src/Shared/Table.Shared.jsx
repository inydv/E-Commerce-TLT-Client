// REACT AND REACT ROUTER DOM
import { Children, useState } from "react";
import { useLocation } from "react-router-dom";

// REACT ICONS
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";

// CUSTOM IMPORTS
import { Form, MUIDialog } from "./index";
import { NotAvailable } from "../Components/index";
import EnumConstant from "../Constants/Enum.Constant.json";
import Images from "../Assets/index";
import ViewItemsConstant from "../Constants/ViewItems.Constant.json";
import FormConstant from "../Constants/EditForm.Constant.json";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// TABLE
export default function Table({ header, data, body, handleBtn }) {
  // STATES
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({});
  const [dialogState, setDialogState] = useState({
    id: null,
    viewData: null,
    displayName: "",
    openForDelete: false,
    openForEdit: false,
  });

  // USE LOCATION
  const { pathname } = useLocation();
  const name = pathname.split("/")[2];

  // CUSTOM FUNCTION
  const handleInput = (stateObj) => {
    for (const [key, value] of Object.entries(stateObj)) {
      setDialogState((prevState) => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    }
    setOpenDialog(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await CREATECONTACT(formData);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      setFormData({});
    }
  };

  // JSX ELEMENT
  return (
    <div className="overflow-x-auto pb-2">
      <table className="min-w-[800px] w-full">
        <thead>
          <tr>
            {Children.toArray(
              header?.map((name) => (
                <th className="border border-gray-500 p-2">{name}</th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            Children.toArray(
              data?.map((item) => (
                <tr>
                  {Children.toArray(
                    body?.map(
                      ({
                        key,
                        type,
                        isViewEnabled,
                        isEditEnabled,
                        isDeleteEnabled,
                      }) =>
                        type === EnumConstant.Table.Image ? (
                          <td className="border border-gray-500 p-2">
                            <div className="grid place-content-center">
                              <img
                                src={
                                  item[key]?.url ||
                                  (item[key]?.length > 0
                                    ? item[key][0]?.url
                                    : "")
                                }
                                alt="Image"
                                className="h-10 w-10"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src =
                                    Images["NoImageAvailable"];
                                }}
                              />
                            </div>
                          </td>
                        ) : type === EnumConstant.Table.Action ? (
                          <td className="border border-gray-500 p-2">
                            <div className="flex gap-5 justify-center items-center">
                              {isViewEnabled && (
                                <AiFillEye
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleInput({
                                      displayName: "View " + name,
                                      openForDelete: false,
                                      openForEdit: false,
                                      viewData: item,
                                    });
                                  }}
                                />
                              )}
                              {isEditEnabled && (
                                <MdModeEdit
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleInput({
                                      displayName: "Edit " + name,
                                      openForDelete: false,
                                      openForEdit: true,
                                      viewData: item,
                                    });
                                  }}
                                />
                              )}
                              {isDeleteEnabled && (
                                <AiFillDelete
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleInput({
                                      displayName: "Delete " + name,
                                      openForDelete: true,
                                      openForEdit: false,
                                      id: item._id,
                                    });
                                  }}
                                />
                              )}
                            </div>
                          </td>
                        ) : (
                          <td className="border border-gray-500 p-2">
                            <p className="text-center line-clamp">
                              {item[key]?.toString() || "-"}
                            </p>
                          </td>
                        )
                    )
                  )}
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="100%" className="border border-gray-500 px-5 py-10">
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
            dialogState?.openForDelete ? (
              `Do you really want to delete this ${name}? This process cannot be undone.`
            ) : dialogState?.openForEdit ? (
              <Form
                submitForm={handleSubmit}
                form={FormConstant[name]}
                formData={formData}
                setFormData={setFormData}
              />
            ) : (
              <Form
                formData={dialogState?.viewData}
                form={ViewItemsConstant[name]}
                ViewForm={true}
              />
            )
          }
          handleBtn={
            dialogState?.openForDelete ? () => handleBtn(dialogState?.id) : null
          }
        />
      </table>
    </div>
  );
}

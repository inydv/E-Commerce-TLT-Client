// REACT AND REACT ROUTER DOM
import { Children, useEffect, useState } from "react";
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
import ProductFormConstant from "../Constants/AddProductForm.Constant.json";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// CUSTOM COMPONENT
const ImageComponent = ({ item, objkey }) => (
  <td className="td-border p-2">
    <div className="grid place-content-center">
      <LazyLoadImage
        src={
          item[objkey]?.url ||
          (item[objkey]?.length > 0 ? item[objkey][0]?.url : "")
        }
        alt="Image"
        className="h-10 w-10"
        effect="blur"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = Images["NoImageAvailable"];
        }}
      />
    </div>
  </td>
);

const ActionComponent = ({
  isViewEnabled,
  isEditEnabled,
  isDeleteEnabled,
  handleInput,
  setId,
  setFormData,
  item,
}) => {
  // USE LOCATION
  const { pathname } = useLocation();
  const name = pathname.split("/")[2];

  return (
    <td className="td-border p-2">
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
              setId(item?._id);
              setFormData(item);
              handleInput({
                displayName: "Edit " + name,
                openForDelete: false,
                openForEdit: true,
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
                id: item?._id,
              });
            }}
          />
        )}
      </div>
    </td>
  );
};

const TextComponent = ({ item, objkey }) => (
  <td className="td-border p-2">
    <p className="text-center line-clamp">{item[objkey]?.toString() || "-"}</p>
  </td>
);

// TABLE
export default function Table({
  header,
  data,
  body,
  handleBtn,

  // EDIT
  handleSubmit,
  formData,
  setFormData,
  setId,
  isApiSuccessfull,
  setIsApiSuccessfull,
}) {
  // STATES
  const [openDialog, setOpenDialog] = useState(false);
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

  // USE EFFECT
  useEffect(() => {
    if (isApiSuccessfull) {
      setOpenDialog(false);
      setIsApiSuccessfull(false);
    }
  }, [isApiSuccessfull, setIsApiSuccessfull]);

  // JSX ELEMENT
  return (
    <section className="overflow-x-auto pb-2">
      <table className="table-width">
        <thead>
          <tr>
            {Children.toArray(
              header?.map((name) => <th className="td-border p-2">{name}</th>)
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
                          <ImageComponent item={item} objkey={key} />
                        ) : type === EnumConstant.Table.Action ? (
                          <ActionComponent
                            isViewEnabled={isViewEnabled}
                            isEditEnabled={isEditEnabled}
                            isDeleteEnabled={isDeleteEnabled}
                            handleInput={handleInput}
                            setId={setId}
                            setFormData={setFormData}
                            item={item}
                          />
                        ) : (
                          <TextComponent item={item} objkey={key} />
                        )
                    )
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
            dialogState?.openForDelete ? (
              `Do you really want to delete this ${name}? This process cannot be undone.`
            ) : dialogState?.openForEdit ? (
              <Form
                submitForm={handleSubmit}
                form={
                  name === "product" ? ProductFormConstant : FormConstant[name]
                }
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
    </section>
  );
}

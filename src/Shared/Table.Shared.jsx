// REACT AND REACT ROUTER DOM
import { Children, useState } from "react";
import { useLocation } from "react-router-dom";

// REACT ICONS
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete, AiFillEye } from "react-icons/ai";

// CUSTOM IMPORTS
import { MUIDialog } from "./index";
import { NotAvailable } from "../Components/index";
import EnumConstant from "../Constants/Enum.Constant.json";
import Images from "../Assets/index";

// TABLE
export default function Table({ header, data, body, handleBtn }) {
  // STATES
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  // USE LOCATION
  const { pathname } = useLocation();
  const name = pathname.split("/")[2];

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
                                />
                              )}
                              {isEditEnabled && (
                                <MdModeEdit
                                  size={20}
                                  className="cursor-pointer"
                                />
                              )}
                              {isDeleteEnabled && (
                                <AiFillDelete
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setOpen(true);
                                    setId(item._id);
                                  }}
                                />
                              )}
                            </div>
                          </td>
                        ) : (
                          <td className="border border-gray-500 p-2">
                            <p className="text-center line-clamp">
                              {item[key]}
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
          setOpen={setOpen}
          open={open}
          openForDelete={true}
          content={`Do you really want to delete this ${name}? This process cannot be undone.`}
          handleBtn={() => handleBtn(id)}
          name={name}
        />
      </table>
    </div>
  );
}

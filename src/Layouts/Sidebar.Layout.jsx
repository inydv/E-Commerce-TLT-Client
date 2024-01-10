// REACT AND REACT ROUTER DOM
import { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM IMPORTS
import RoutesConstant from "../Constants/Routes.Constant.json";
import { Form, MUIDialog, SideDrawer } from "../Shared/index";
import AddProductFormConstant from "../Constants/AddProductForm.Constant.json";
import { useUser } from "../Context/User.Context";
import EnumConstant from "../Constants/Enum.Constant.json";
import { CREATEPRODUCT } from "../Services/index";

// REACT ICONS
import { HiMenuAlt2 } from "@react-icons/all-files/hi/HiMenuAlt2";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// CUSTOM COMPONENT
const NavigationList = ({ NavigationConstant }) => (
  <ul className="justify-self-center inline-flex flex-col gap-5 text-lg">
    {Children.toArray(
      NavigationConstant?.map(({ func, name }) => (
        <li
          className="border-b-2 border-b-customGray p-2 pb-5 cursor-pointer"
          onClick={() => func()}
        >
          <p>{name}</p>
        </li>
      ))
    )}
  </ul>
);

// SIDEBAR
export default function Sidebar() {
  // STATES
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({});

  // USE NAVIGATE
  const navigate = useNavigate();

  // CONTEXT
  const { user } = useUser();

  // NAVIGATION CONSTANT
  const NavigationConstant = [
    {
      func: () => {
        setIsDrawerOpen(false);
        navigate(RoutesConstant.adminProduct);
      },
      name: "Product",
    },
    {
      func: () => {
        setIsDrawerOpen(false);
        setOpenDialog(true);
      },
      name: "Add Product",
    },
  ];

  if (user && user.role === EnumConstant.UserRole.Admin) {
    NavigationConstant.unshift(
      {
        func: () => {
          setIsDrawerOpen(false);
          navigate(RoutesConstant.dashboard);
        },
        name: "Dashboard",
      },
      {
        func: () => {
          setIsDrawerOpen(false);
          navigate(RoutesConstant.adminUser);
        },
        name: "User",
      }
    );

    NavigationConstant.push(
      {
        func: () => {
          setIsDrawerOpen(false);
          navigate(RoutesConstant.adminOrder);
        },
        name: "Order",
      },
      {
        func: () => {
          setIsDrawerOpen(false);
          navigate(RoutesConstant.adminContact);
        },
        name: "Contact",
      }
    );
  }

  // CUSTOM FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      myForm.set(key, value);
    }

    const { data } = await CREATEPRODUCT(myForm);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      setOpenDialog(false);
      setFormData({});
      navigate(RoutesConstant.adminProduct);
    }
  };

  // JSX ELEMENT
  return (
    <div className="mb-5">
      <div className="flex justify-end">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span>Menu</span>
          <HiMenuAlt2 color="white" size={25} />
        </div>
      </div>
      <MUIDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={"Add Product"}
        content={
          <Form
            submitForm={handleSubmit}
            form={AddProductFormConstant}
            formData={formData}
            setFormData={setFormData}
          />
        }
        openForEdit={true}
      />
      <SideDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        content={<NavigationList NavigationConstant={NavigationConstant} />}
      />
    </div>
  );
}

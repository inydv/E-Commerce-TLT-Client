// REACT AND REACT ROUTER DOM
import { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

// CUSTOM IMPORTS
import RoutesConstant from "../Constants/Routes.Constant.json";
import { Form, MUIDialog, SideDrawer } from "../Shared/index";
import AddProductFormConstant from "../Constants/AddProductForm.Constant.json";
import { useUser } from "../Context/User.Context";
import EnumConstant from "../Constants/Enum.Constant.json";

// REACT ICONS
import { HiMenuAlt2 } from "react-icons/hi";

// NAVIGATION LIST
const NavigationList = ({ NavigationConstant }) => (
  <ul className="justify-self-center inline-flex flex-col gap-5 text-lg">
    {Children.toArray(
      NavigationConstant?.map(({ func, name }) => (
        <li className="border-b-2 border-b-customGray p-2 pb-5">
          <p onClick={() => func()}>{name}</p>
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

  // JSX ELEMENT
  return (
    <div className="mb-5">
      <div className="flex justify-end gap-2 cursor-pointer">
        <p>Menu</p>
        <HiMenuAlt2
          color="white"
          size={25}
          onClick={() => setIsDrawerOpen(true)}
        />
      </div>
      <MUIDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={"Add Product"}
        content={
          <Form
            formData={formData}
            form={AddProductFormConstant}
            setFormData={setFormData}
          />
        }
        btnText={"Add"}
      />
      <SideDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        content={<NavigationList NavigationConstant={NavigationConstant} />}
      />
    </div>
  );
}

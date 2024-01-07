// REACT
import { useEffect, useState } from "react";

// CUSTOM IMPORTS
import { MyAccountForm } from "../Components";
import { UPDATEMYPROFILE } from "../Services/index";
import { useUser } from "../Context/User.Context";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// MY ACCOUNT
export default function MyAccount() {
  // STATES
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  // CONTEXT
  const { user } = useUser();

  // CUSTOM FUNCTIONS
  const handleInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      myForm.set(key, value);
    }

    if (avatar) {
      myForm.set("avatar", avatar);
    }

    const { data } = await UPDATEMYPROFILE(myForm);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      setFormData({});
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    setFormData((prevState) => {
      return {
        ...prevState,
        username: user?.username,
        phone: user?.phone,
        gender: user?.gender || "Male",
      };
    });
  }, [user]);

  // JSX ELEMENT
  return (
    <div className="p-5 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="hidden xl:block xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <MyAccountForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleImage={handleImage}
          avatarPreview={avatarPreview}
          formData={formData}
        />
      </div>
    </div>
  );
}

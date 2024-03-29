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
  const [isDisabled, setIsDisabled] = useState(true);
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
      setIsDisabled(true);
      setFormData((prevState) => {
        return {
          ...prevState,
          username: data?.DATA?.username,
          phone: data?.DATA?.phone,
          gender: data?.DATA?.gender || "",
        };
      });
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
        gender: user?.gender || "",
      };
    });
  }, [user]);

  // JSX ELEMENT
  return (
    <section className="page-padding">
      <div className="page-width">
        <div className="hidden xl:block xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <MyAccountForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleImage={handleImage}
          avatarPreview={avatarPreview}
          formData={formData}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </div>
    </section>
  );
}

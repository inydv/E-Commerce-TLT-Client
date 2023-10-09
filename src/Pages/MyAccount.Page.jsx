import { MyAccountUpperCard, MyAccountLowerCard } from "../Components";
import { useState } from "react";
import { UPDATEMYPROFILE } from "../Services/index";

export default function MyAccount() {
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const handleInput = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
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
      toast.success(data?.MESSAGE, toastConfig.success);
      setFormData({});
    }
  };

  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="hidden xl:block xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <MyAccountUpperCard
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          avatarPreview={avatarPreview}
        />
        <MyAccountLowerCard handleInput={handleInput} />
      </div>
    </div>
  );
}

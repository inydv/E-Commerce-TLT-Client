// REACT
import { useEffect, useState } from "react";

// CUSTOM IMPORTS
import ContactFormConstant from "../Constants/ContactForm.Constant.json";
import { CREATECONTACT } from "../Services/index";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// CUSTOM IMPORT
import { Form } from "../Shared/index";

// CONTACT
export default function Contact() {
  // STATE
  const [formData, setFormData] = useState({});

  // CUSTOM FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await CREATECONTACT(formData);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      setFormData({});
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return (
    <div className="px-5 py-5 sm:px-10">
      <div className="max-w-[800px]">
        <h1 className="font-semibold text-2xl sm:text-4xl pb-5 sm:pb-10">
          CONTACT
        </h1>
        <Form
          submitForm={handleSubmit}
          form={ContactFormConstant}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

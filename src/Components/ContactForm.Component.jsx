import { Children, useState } from "react";
import ContactInputForm from "../Constants/ContactForm.Constant.json";
import { CREATECONTACT } from "../Services/index";
import toast from "react-hot-toast";
import toastConfig from "../Constants/Toast.Constant.json";

export default function ContactForm() {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await CREATECONTACT(formData);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, toastConfig.success);
      setFormData({});
    }
  };

  return (
    <form className="pt-10" onSubmit={(e) => handleSubmit(e)}>
      {Children.toArray(
        ContactInputForm?.map(({ children, hierarchy, heading }) =>
          hierarchy ? (
            <fieldset className="flex justify-between">
              <legend className="text-lg font-semibold">{heading}</legend>
              {Children.toArray(
                children?.map(
                  ({
                    type,
                    className,
                    placeholder,
                    isRequired,
                    autoFocus,
                    autoComplete,
                    name,
                    title,
                  }) => (
                    <div className="w-[45%]">
                      <input
                        type={type}
                        className={className}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        required={isRequired}
                        autoComplete={autoComplete}
                        name={name}
                        onChange={(e) => handleInput(e)}
                      />
                      <div className="text-base">{title}</div>
                    </div>
                  )
                )
              )}
            </fieldset>
          ) : (
            Children.toArray(
              children.map(
                ({
                  type,
                  className,
                  placeholder,
                  isRequired,
                  autoFocus,
                  autoComplete,
                  name,
                  title,
                }) =>
                  type === "textarea" ? (
                    <div className="flex flex-col my-5">
                      <label className="text-lg font-semibold">{title}</label>
                      <textarea
                        className={className}
                        placeholder={placeholder}
                        required={isRequired}
                        rows={5}
                        name={name}
                        onChange={(e) => handleInput(e)}
                      ></textarea>
                    </div>
                  ) : (
                    <div className="flex flex-col my-5">
                      <label className="text-lg font-semibold">{title}</label>
                      <input
                        type={type}
                        className={className}
                        placeholder={placeholder}
                        required={isRequired}
                        autoComplete={autoComplete}
                        name={name}
                        onChange={(e) => handleInput(e)}
                      />
                    </div>
                  )
              )
            )
          )
        )
      )}

      <button
        className="bg-button py-2 px-5 float-right text-base font-semibold"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}

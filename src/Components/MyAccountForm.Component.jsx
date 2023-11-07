// REACT
import { Children, useRef, useState } from "react";

// CUSTOM IMPORT
import MyAccountFormConstant from "../Constants/MyAccountForm.Constant.json";
import { useUser } from "../Context/User.Context";

// REACT ICON
import { BsFillPencilFill } from "react-icons/bs";

// MY ACCOUNT FORM
export default function MyAccountForm({
  handleSubmit,
  handleInput,
  handleImage,
  avatarPreview,
  formData,
}) {
  // STATE
  const [isDisabled, setIsDisabled] = useState(true);

  // USE REF
  const changeImage = useRef();

  // CONTEXT
  const { user } = useUser();

  // CUSTOM FUNCTION
  const handleChangeImage = () => {
    changeImage.current.click();
  };

  // JSX ELEMENT
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex xl:items-center justify-between flex-col md:flex-row xl:-translate-y-10">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src={
                  avatarPreview ||
                  user?.avatar?.url ||
                  "/src/Assets/user-icon.png"
                }
                alt=""
                className="rounded-full h-[80px] xl:h-[150px] w-[80px] xl:w-[150px] border-2 border-white mr-5"
              />
              <input
                type="file"
                className="hidden"
                name="avatar"
                accept="image/*"
                onChange={(e) => handleImage(e)}
                ref={changeImage}
              />
              <BsFillPencilFill
                className="absolute right-2 bottom-0 sm:right-5 bg-white rounded-full p-1 xl:p-2 edit-icon cursor-pointer text-2xl xl:text-4xl border-2 border-black"
                onClick={() => handleChangeImage()}
              />
            </div>
            <div>
              <h1 className="font-semibold text-2xl xl:text-4xl">Profile</h1>
              <p className="text-base sm:text-lg mt-1">
                Update your photo and personal details.
              </p>
            </div>
          </div>
          <div className="mt-4 xl:mt-0 flex justify-end md:block">
            <button
              type="submit"
              className="primary-button"
              onClick={(e) => handleSubmit(e)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[650px] mx-auto mt-5">
        {Children.toArray(
          MyAccountFormConstant?.map(
            ({ tagType, options, className, name, placeholder, label, type }) =>
              tagType === "input" ? (
                <div className="xl:grid xl:grid-cols-2 mb-5">
                  <label className="font-semibold text-base sm:text-xl">
                    {label}
                  </label>
                  <input
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    required={true}
                    name={name}
                    onChange={(e) => handleInput(e)}
                    value={formData[name] || ""}
                  />
                </div>
              ) : tagType === "radio" ? (
                <div className="xl:grid xl:grid-cols-2 my-5 sm:my-10 items-center">
                  <label className="font-semibold text-base sm:text-xl">
                    {label}
                  </label>
                  <div>
                    {Children.toArray(
                      options?.map(({ label, name }) => (
                        <>
                          <input
                            type="radio"
                            className="mr-2"
                            id={label}
                            name={name}
                            value={label}
                            onChange={(e) => handleInput(e)}
                            checked={formData?.gender === label}
                          />
                          <label htmlFor={label} className="mr-5 text-base">
                            {label}
                          </label>
                        </>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <div className="xl:grid xl:grid-cols-2">
                  <div className="mb-5">
                    <h6 className="font-semibold text-base sm:text-xl">Change Password</h6>
                    <p className="text-xs ml-5 mt-1 xl:mt-2 font-semibold">
                      **
                      <span
                        className="text-red-700 cursor-pointer"
                        onClick={() => setIsDisabled(false)}
                      >
                        Click Me{" "}
                      </span>
                      To Change Password **
                    </p>
                  </div>
                  <div className="flex flex-col">
                    {Children.toArray(
                      options?.map(({ placeholder, name }) => (
                        <input
                          type="password"
                          className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-sm sm:text-base mb-2 sm:mb-5 xl:mt-0"
                          placeholder={placeholder}
                          disabled={isDisabled}
                          name={name}
                          onChange={(e) => handleInput(e)}
                        />
                      ))
                    )}
                  </div>
                </div>
              )
          )
        )}
      </div>
    </>
  );
}

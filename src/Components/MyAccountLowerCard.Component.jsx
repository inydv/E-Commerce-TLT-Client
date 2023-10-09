import { Children, useState } from "react";
import MyAccountForm from "../Constants/MyAccountForm.Constant.json";
import { useUser } from "../Context/User.Context";

export default function MyAccountLowerCard({ handleInput }) {
  const { user } = useUser();

  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="max-w-[650px] mx-auto mt-5">
      {Children.toArray(
        MyAccountForm?.map(
          ({
            inputType,
            inputArr,
            autoComplete,
            className,
            isRequired,
            name,
            placeholder,
            title,
            type,
          }) =>
            inputType === "inputBox" ? (
              <div className="xl:grid xl:grid-cols-2 mb-5">
                <h6 className="font-semibold text-lg">{title}</h6>
                <input
                  type={type}
                  className={className}
                  placeholder={placeholder}
                  required={isRequired}
                  autoComplete={autoComplete}
                  name={name}
                  onChange={(e) => handleInput(e)}
                  value={user ? user[name] : ""}
                />
              </div>
            ) : inputType === "radio" ? (
              <div className="xl:grid xl:grid-cols-2 my-10 items-center">
                <h6 className="font-semibold text-lg">{title}</h6>
                <div>
                  {Children.toArray(
                    inputArr?.map(({ title, name }) => (
                      <>
                        <input
                          type="radio"
                          className="mr-2"
                          id={title}
                          name={name}
                          value={title}
                          onChange={(e) => handleInput(e)}
                        />
                        <label htmlFor={title} className="mr-5 text-base">
                          {title}
                        </label>
                      </>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="xl:grid xl:grid-cols-2">
                <div className="mb-5">
                  <h6 className="font-semibold text-lg">Change Password</h6>
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
                    inputArr?.map(({ placeholder, name }) => (
                      <input
                        type="text"
                        className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mb-5 xl:mt-0"
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
  );
}

// REACT
import { useRef } from "react";

// TOASTER
import ToastConstant from "../Constants/Toast.Constant.json";
import toast from "react-hot-toast";

// NEWS LETTER
export default function NewsLetter() {
  // USEREF
  const emailInput = useRef(null);

  // CUSTOM FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    emailInput.current.value = "";
    return toast.error("You Will Be Notified", ToastConstant.success);
  };

  // JSX ELEMENT
  return (
    <section className="bg-[url('../src/Assets/newsLetter.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[25vh] md:h-[40vh] grid place-items-center mt-5">
      <div className="p-5">
        <h1 className="font-semibold text-2xl md:text-5xl text-center">
          THE LATEST
        </h1>
        <p className="text-base md:text-2xl text-center mt-2 mb-4 md:mt-5 md:mb-5">
          Sign up to receive news and updates.
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex justify-center">
          <input
            ref={emailInput}
            type="email"
            name="email"
            placeholder="Email Address"
            className="py-1 md:py-2 px-2 md:px-5 outline-none text-black text-sm md:text-base"
            required
          />
          <button
            type="submit"
            className="primary-button border border-customGray"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </section>
  );
}

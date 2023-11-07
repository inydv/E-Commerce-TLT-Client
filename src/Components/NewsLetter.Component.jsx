// NEWS LETTER
export default function NewsLetter() {
  // JSX ELEMENT
  return (
    <div className="bg-[url('../src/Assets/newsLetter.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[25vh] md:h-[40vh] grid place-items-center mt-5">
      <div className="p-5">
        <h1 className="font-semibold text-2xl md:text-5xl text-center">
          THE LATEST
        </h1>
        <p className="text-base md:text-2xl text-center mt-2 mb-4 md:mt-5 md:mb-5">
          Sign up to receive news and updates.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="py-1 md:py-2 px-2 md:px-5 outline-none text-black text-sm md:text-base"
            required
          />
          <button className="primary-button text-sm md:text-base border border-customGray">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

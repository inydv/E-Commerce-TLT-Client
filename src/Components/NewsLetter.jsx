export default function NewsLetter() {
  return (
    <div className="bg-[url('src/Assets/newsLetter.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[20vh] md:h-[40vh] grid place-items-center">
      <div className="p-5">
        <h1 className="font-semibold text-2xl md:text-5xl text-center">
          THE LATEST
        </h1>
        <p className="text-base md:text-2xl text-center md:mt-2 mb-2 md:mb-5">
          Sign up to receive news and updates.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="py-1 md:py-2 px-2 md:px-5 outline-none text-black text-xs md:text-base"
            required
          />
          <button className="bg-button font-semibold text-xs md:text-base py-1 md:py-2 px-2 md:px-5 border border-solid border-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

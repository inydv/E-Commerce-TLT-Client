export default function ContactForm() {
  return (
    <form className="pt-10">
      <fieldset className="flex justify-between">
        <legend className="text-lg font-semibold">Name *</legend>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
            placeholder="Lokesh"
            autoFocus
            required
            autoComplete="first-name"
          />
          <div className="text-base">First Name</div>
        </div>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
            placeholder="Yadav"
            required
            autoComplete="last-name"
          />
          <div className="text-base">Last Name</div>
        </div>
      </fieldset>

      <div className="flex flex-col my-5">
        <label className="text-lg font-semibold">Email *</label>
        <input
          type="email"
          className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
          placeholder="im.nydv@gmail.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-semibold">Subject *</label>
        <input
          type="text"
          className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
          placeholder="Want Something New Or Any Query..."
          required
        />
      </div>

      <div className="flex flex-col my-5">
        <label className="text-lg font-semibold">Message *</label>
        <textarea
          className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
          placeholder="What Do You Actually Want? Or Raise a Question?"
          required
          rows={5}
        ></textarea>
      </div>

      <button
        className="bg-button py-2 px-5 float-right text-base font-semibold"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}

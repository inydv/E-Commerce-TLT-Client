export default function NotFound() {
  return (
    <>
      <div className="flex justify-center bg-white">
        <img src="/src/Assets/notFound.gif" alt="" />
      </div>
      <div className="grid justify-center p-5">
        <h1 className="text-center text-xl font-semibold">
          Look Like You're lost
        </h1>
        <h3 className="text-center text-xl font-semibold pt-2 pb-4">
          The Page You're Looking For Not Available!
        </h3>
        <button className="bg-button py-2 px-4 text-lg font-semibold">
          Go To Home
        </button>
      </div>
    </>
  );
}

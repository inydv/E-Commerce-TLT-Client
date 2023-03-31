export default function NotFound() {
  return (
    <>
      <div className="bg-white bg-[url('src/Assets/notFound.gif')] bg-no-repeat bg-center h-[420px] w-full"></div>
      <div className="grid justify-center p-5">
        <h1 className="text-center text-xl font-semibold">
          Look Like You're lost
        </h1>
        <h3 className="text-center text-xl font-semibold pt-2 pb-4">
          The Page You're Looking For Not Available!
        </h3>
        <button className="bg-button py-2 px-5 text-lg font-semibold">Go To Home</button>
      </div>
    </>
  );
}

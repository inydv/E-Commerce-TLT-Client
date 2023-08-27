export default function OrderDetailCard() {
  return (
    <>
      <h1 className="font-bold text-xl sm:text-2xl whitespace-nowrap">
        # ywfviqwouvq364qviquf7w
      </h1>
      <div className="mt-5 sm:mt-10">
        <span className="font-semibold text-base sm:text-lg">Name : </span>
        <span className="text-sm sm:text-base">Lokesh Yadav</span>
      </div>
      <div className="my-1 sm:my-2">
        <span className="font-semibold text-base sm:text-lg">Email : </span>
        <span className="text-sm sm:text-base">im.nydv@gmail.com</span>
      </div>
      <div className="my-1 sm:my-2">
        <span className="font-semibold text-base sm:text-lg">Phone : </span>
        <span className="text-sm sm:text-base">(+91) 7303405787</span>
      </div>
      <div className="my-1 sm:my-2">
        <span className="font-semibold text-base sm:text-lg">Address : </span>
        <span className="text-sm sm:text-base">New Delhi</span>
      </div>
      <div className="my-1 sm:my-2">
        <span className="font-semibold text-base sm:text-lg">Total Amount : </span>
        <span className="text-sm sm:text-base">82055</span>
      </div>
      <div className="my-1 sm:my-2">
        <span className="font-semibold text-base sm:text-lg">Order Status : </span>
        <span className="text-sm sm:text-base">UnShipped</span>
      </div>
      <div className="mt-5 sm:mt-10 mb-5 flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-3xl">Order Items</h1>
        <button className="py-2 px-5 bg-button font-semibold">
          Cancel Order
        </button>
      </div>
    </>
  );
}

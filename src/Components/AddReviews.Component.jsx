import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function AddReviews() {
  const [iswrite, setIsWrite] = useState(false);

  return (
    <>
      {iswrite ? (
        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-3 md:p-5">
          <img
            src=""
            alt=""
            className="rounded-full h-16 md:h-28 w-16 md:w-28"
          />
          <p className="py-2"></p>
          <Rating value="" precision={0.5} max={5} />
          <textarea
            className="mt-3 w-[200px] md:w-[400px] outline-none rounded-sm p-2 md:p-3 text-sm md:text-base h-auto bg-black border border-gray-700"
            rows={3}
            placeholder="Write Your Review Here With length 100 To 200..."
            minLength={100}
            maxLength={200}
          ></textarea>
        </div>
      ) : (
        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-2 md:p-5">
          <div className="w-[200px] md:w-[400px] h-full grid place-items-center">
            <button
              className="bg-button py-2 px-5 text-base font-semibold"
              onClick={() => setIsWrite(true)}
            >
              Add Review
            </button>
          </div>
        </div>
      )}
    </>
  );
}

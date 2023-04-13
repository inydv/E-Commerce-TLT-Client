import Photo from "../Assets/men/pullovers.jpg";
import { BsFillPencilFill } from "react-icons/bs";

export default function MyAccountUpperCard() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex xl:items-center justify-between flex-col md:flex-row xl:-translate-y-10">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={Photo}
              alt=""
              className="rounded-full h-[80px] xl:h-[150px] w-[80px] xl:w-[150px] border-2 border-white mr-5"
            />
            <BsFillPencilFill className="absolute right-2 bottom-0 sm:right-5 bg-white rounded-full p-1 xl:p-2 edit-icon cursor-pointer text-2xl xl:text-4xl" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-3xl">Profile</h1>
            <p className="text-base">Update your photo and personal details.</p>
          </div>
        </div>
        <div className="mt-4 xl:mt-0 flex justify-end md:block">
          <button className="bg-button px-4 py-2 font-semibold text-base">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

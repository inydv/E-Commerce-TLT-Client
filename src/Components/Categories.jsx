import MenImage from "../Assets/mensCollection.jpg";
import WomenImage from "../Assets/womenCollection.jpg";

export default function Categories() {
  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto flex gap-x-5">
        <div className="flex-1 group overflow-hidden">
          <img
            src={MenImage}
            alt=""
            className="h-full w-full filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
          />
          <p className="text-5xl font-semibold text-center translate-y-[-1000px] backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out group-hover:translate-y-[-60px]">
            Men
          </p>
        </div>
        <div className="flex-1 group overflow-hidden">
          <img
            src={WomenImage}
            alt=""
            className="h-full w-full filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
          />
          <p className="text-5xl font-semibold text-center translate-y-[-1000px] backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out group-hover:translate-y-[-60px]">
            Women
          </p>
        </div>
      </div>
    </div>
  );
}

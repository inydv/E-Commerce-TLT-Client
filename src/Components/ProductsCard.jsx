import RSCoversion from "../Pipes/RSConversion";

export default function ProductsCard({ item }) {
  return (
    <div className="h-[200px] w-[160px] sm:h-[300px] sm:w-[240px] xl:h-[400px] xl:w-[320px] overflow-hidden relative group">
      <img
        src={item.img}
        alt=""
        className="h-full w-full transition-all duration-200 ease-in-out group-hover:translate-x-[30%] group-hover:opacity-50"
      />
      <div className="absolute top-0 left-0 w-[60%] h-full bg-[#060606] transition-all duration-200 ease-in-out origin-left grid place-items-center rotate-180 group-hover:rotate-0">
        <div className="p-1">
          <p className="text-xs sm:text-sm xl:text-lg font-semibold">
            {item.title}
          </p>
          <p className="text-red-600 text-xs sm:text-sm xl:text-lg font-semibold mt-1 mb-2">
            {RSCoversion(item.price)}
          </p>
          <button className="bg-button py-1 px-2 xl:py-2 xl:px-4 text-[10px] sm:text-xs xl:text-base font-semibold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="py-1 lg:py-0">
      <div className="bg-[#010101] grid grid-cols-2 place-items-center px-5">
        <div className="h-[200px] sm:h-[380px] lg:h-[600px]">
          <div className="h-[49%]">
            <img src="/src/Assets/banner/1.png" alt="" className="h-[100%]" />
          </div>
          <div className="h-[49%]">
            <div className="h-[50%] flex gap-1 mt-1">
              <img src="/src/Assets/banner/2.png" alt="" className="h-[100%]" />
              <img src="/src/Assets/banner/3.png" alt="" className="h-[100%]" />
            </div>
            <div className="h-[50%] flex gap-1 mt-1">
              <img src="/src/Assets/banner/4.png" alt="" className="h-[100%]" />
              <img src="/src/Assets/banner/5.png" alt="" className="h-[100%]" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-center p-8 sm:p-12 lg:p-28 bg-[#060606] border-radius">
            <h1 className="font-semibold text-base sm:text-xl lg:text-4xl">
              TRENDIEST STYLES AT A STEAL!
            </h1>
            <h2 className="font-semibold py-2 lg:py-5 text-xs sm:text-base lg:text-2xl">
              50-80% OFF
            </h2>
            <h3 className="font-semibold text-sm sm:text-lg lg:text-3xl">
              12,000+ Styles | 15,000+ Brands
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsCategoriesCard({ item }) {
  return (
    <div className="h-[200px] w-[160px] sm:h-[300px] sm:w-[240px] xl:h-[400px] xl:w-[320px] overflow-hidden relative group">
      <img
        src={item.img}
        alt=""
        className="h-full w-full transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:opacity-25"
      />
      <div className="absolute top-0 h-full w-full hidden items-center justify-center group-hover:flex">
        <p className="text-2xl md:text-4xl font-semibold">{item.title}</p>
      </div>
    </div>
  );
}

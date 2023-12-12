// PRODUCTS CATEGORIES CARD
export default function ProductsCategoriesCard({ item }) {
  // JSX ELEMENT
  return (
    <div className="aspect-square h-full max-h-[344px] max-w-[48%] md:max-w-[344px] overflow-hidden relative group">
      <img
        src={item.img}
        alt="Category Image"
        className="h-full w-full transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:opacity-25"
      />
      <div className="absolute top-0 h-full w-full hidden items-center justify-center group-hover:flex">
        <p className="text-2xl md:text-4xl font-semibold">{item.title}</p>
      </div>
    </div>
  );
}

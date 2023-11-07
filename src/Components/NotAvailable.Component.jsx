export default function NotAvailable({ title }) {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="border-2 rounded-full h-16 w-16 grid place-content-center font-semibold text-4xl">
        !
      </h1>
      <h1 className="text-xl sm:text-2xl">{title} Not Available</h1>
    </div>
  );
}

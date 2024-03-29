// LOADER
export default function Loader() {
  // JSX ELEMENT
  return (
    <section className="h-screen w-screen grid place-content-center bg-black fixed top-0 left-0 z-[9999]">
      <div className="w-28 h-28 border-b-4 border-b-red-600 rounded-full animate-spin"></div>
    </section>
  );
}

import { ContactForm, Map } from "../Components/index";

export default function Contact() {
  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-bold text-4xl">CONTACT</h1>
        <div className="grid lg:grid-cols-2">
          <ContactForm />
          <Map />
        </div>
      </div>
    </div>
  );
}

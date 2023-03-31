import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapValues } from "../Constants/MapValues";

export default function Contact() {
  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-bold text-4xl">CONTACT</h1>
        <div className="grid lg:grid-cols-2">
          <form className="pt-10">
            <fieldset className="flex justify-between">
              <legend className="text-lg font-semibold">Name *</legend>
              <div className="w-[45%]">
                <input
                  type="text"
                  className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
                  placeholder="Lokesh"
                  autoFocus
                  required
                  autoComplete="first-name"
                />
                <div className="text-base">First Name</div>
              </div>
              <div className="w-[45%]">
                <input
                  type="text"
                  className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
                  placeholder="Yadav"
                  required
                  autoComplete="last-name"
                />
                <div className="text-base">Last Name</div>
              </div>
            </fieldset>

            <div className="flex flex-col my-5">
              <label className="text-lg font-semibold">Email *</label>
              <input
                type="email"
                className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
                placeholder="im.nydv@gmail.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold">Subject *</label>
              <input
                type="text"
                className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
                placeholder="Want Something New Or Any Query..."
                required
              />
            </div>

            <div className="flex flex-col my-5">
              <label className="text-lg font-semibold">Message *</label>
              <textarea
                className="w-full text-black outline-none px-4 py-2 rounded-sm my-2 text-base"
                placeholder="What Do You Actually Want? Or Raise a Question?"
                required
                rows={5}
              ></textarea>
            </div>

            <button
              className="bg-button py-2 px-5 float-right text-base font-semibold"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
          <div className="grid justify-center mt-10 lg:mt-0 items-center p-5">
            <div className="h-[150px] w-[280px] sm:h-[300px] sm:w-[500px] md:h-[300px] md:w-[700px] lg:h-[200px] lg:w-[400px] xl:h-[300px] xl:w-[550px] shadow-lg shadow-button">
              <MapContainer
                center={MapValues.location}
                zoom={MapValues.zoomLevel}
                className="h-full w-full"
              >
                <TileLayer
                  url={MapValues.url}
                  attribution={MapValues.attribution}
                />
                <Marker
                  position={MapValues.position}
                  icon={MapValues.markerIcon}
                ></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

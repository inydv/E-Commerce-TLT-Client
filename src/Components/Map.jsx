import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapItems } from "../Constants/MapItems";

export default function Map() {
  return (
    <div className="grid justify-center mt-10 lg:mt-0 items-center p-5">
      <div className="h-[150px] w-[280px] sm:h-[300px] sm:w-[500px] md:h-[300px] md:w-[700px] lg:h-[200px] lg:w-[400px] xl:h-[300px] xl:w-[550px] shadow-lg shadow-button">
        <MapContainer
          center={MapItems.location}
          zoom={MapItems.zoomLevel}
          className="h-full w-full"
        >
          <TileLayer url={MapItems.url} attribution={MapItems.attribution} />
          <Marker
            position={MapItems.position}
            icon={MapItems.markerIcon}
          ></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

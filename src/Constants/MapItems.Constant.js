export const MapItems = {
    location: {
        lat: 28.52319,
        lng: 77.08179,
    },

    zoomLevel: 9,

    markerIcon: new L.Icon({
        iconUrl: "src/Assets/location.svg",
        iconSize: [35, 35],
        iconAnchor: [17, 45],
        popupAnchor: [3, -46],
    }),

    position: [28.52319, 77.08179],

    url: "https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=bW4KH08wRy8QSKtYtLyI",
    attribution:
        '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};
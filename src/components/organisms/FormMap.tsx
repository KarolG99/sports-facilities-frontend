import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { styled } from "styled-components";

import MarkerIcon from "../../assets/icons/basicMarker.svg";

const FormMap = ({ values, handleChange }: any) => {
  const customMarkerIcon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <StyledMapContainer
      center={[values?.latitude || 52.164869, values?.longitude || 19.564882]}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          values?.latitude || 52.164869,
          values?.longitude || 19.564882,
        ]}
        icon={customMarkerIcon}
        draggable
        eventHandlers={{
          dragend: (e) => {
            const { lat, lng } = e.target.getLatLng();
            handleChange({ target: { name: "latitude", value: lat } });
            handleChange({ target: { name: "longitude", value: lng } });
          },
        }}
      />
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled(MapContainer)`
  margin: 10px auto;
  border-radius: 10px;
`;

export default FormMap;

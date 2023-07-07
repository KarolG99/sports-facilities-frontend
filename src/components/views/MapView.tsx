import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "styled-components";
import { Icon, LatLngLiteral } from "leaflet";

import FacilityStatus from "../atoms/FacilityStatus";
import SingleFacilityItem from "../atoms/SingleFacilityItem";

import { IFacility } from "../../pages/HomePage/types";

import dictionary from "../../dictionaries/components.json";

import OccupiedMarkerIcon from "../../assets/icons/occupiedMarker.svg";
import UnoccupiedMarkerIcon from "../../assets/icons/unoccupiedMarker.svg";

import "leaflet/dist/leaflet.css";

interface MapViewProps {
  facilities: IFacility[];
}
const MapView = ({ facilities }: MapViewProps) => {
  const facilityDictionary = dictionary.singleFacility;
  const mapCenterPosition: LatLngLiteral = { lat: 52.164869, lng: 19.564882 };
  const facilitiesWithCoordinates = facilities.filter(
    (facility) => facility.coordinates?.latitude
  );

  return (
    <StyledMapContainer
      center={mapCenterPosition}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {facilitiesWithCoordinates.map((facility) => {
        const customIcon = new Icon({
          iconUrl: facility.isOccupied
            ? OccupiedMarkerIcon
            : UnoccupiedMarkerIcon,
          iconSize: [32, 38],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
        });

        return (
          <Marker
            position={[
              Number(facility.coordinates.latitude),
              Number(facility.coordinates.longitude),
            ]}
            icon={customIcon}
            key={facility._id}
          >
            <Popup>
              <FacilityStatus
                isOccupied={facility.isOccupied}
                occupiedTime={facility.occupiedTime}
                withoutCircle
              />
              <SingleFacilityItem
                fieldName={facilityDictionary.city}
                fieldText={facility.city}
              />
              <SingleFacilityItem
                fieldName={facilityDictionary.ZIPCode}
                fieldText={facility.ZIPCode}
              />
              <SingleFacilityItem
                fieldName={facilityDictionary.address}
                fieldText={facility.address}
              />
              <SingleFacilityItem
                fieldName={facilityDictionary.purpose}
                fieldText={facility.purpose}
              />
            </Popup>
          </Marker>
        );
      })}
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled(MapContainer)`
  width: 95%;
  height: calc(90vh - 180px);
  margin: auto;
  max-width: 800px;
  max-height: 670px;
  border-radius: 10px 10px 10px 10px;

  @media (min-width: 992px) {
    height: calc(90vh - 100px);
    max-width: 500px;
    max-height: 500px;
    position: fixed;
  }
`;

export default MapView;

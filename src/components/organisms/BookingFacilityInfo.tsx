import { IFacility } from "../../pages/HomePage/types";

import dictionary from "../../dictionaries/components.json";
import SingleFacilityItem from "../atoms/SingleFacilityItem";
import FacilityStatus from "../atoms/FacilityStatus";
import { styled } from "styled-components";
import FacilityType from "../atoms/FacilityType";

interface BookingFacilityInfoProps {
  facility: IFacility;
}

const BookingFacilityInfo = ({ facility }: BookingFacilityInfoProps) => {
  const {
    city,
    ZIPCode,
    address,
    purpose,
    description,
    isOccupied,
    occupiedTime,
  } = facility;
  const facilityDictionary = dictionary.singleFacility;

  return (
    <StyledBookingFacilityInfo>
      <FacilityStatus isOccupied={isOccupied} occupiedTime={occupiedTime} />
      <SingleFacilityItem
        fieldName={""}
        fieldText={<FacilityType type={purpose} />}
      />
      <SingleFacilityItem
        fieldName={facilityDictionary.city}
        fieldText={city}
      />
      <SingleFacilityItem
        fieldName={facilityDictionary.ZIPCode}
        fieldText={ZIPCode}
      />
      <SingleFacilityItem
        fieldName={facilityDictionary.address}
        fieldText={address}
      />
      {description && (
        <SingleFacilityItem
          fieldName={facilityDictionary.description}
          fieldText={description}
        />
      )}
    </StyledBookingFacilityInfo>
  );
};

const StyledBookingFacilityInfo = styled.section`
  width: fit-content;
  max-width: 500px;
  padding: 15px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 350px;
`;

export default BookingFacilityInfo;

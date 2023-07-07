import { styled } from "styled-components";

import SingleFacilityItem from "../atoms/SingleFacilityItem";
import FacilityStatus from "../atoms/FacilityStatus";

import { IFacility } from "../../pages/HomePage/types";

import dictionary from "../../dictionaries/components.json";

interface SingleFacilityProps {
  facility: IFacility;
}

const SingleFacility = ({ facility }: SingleFacilityProps) => {
  const {
    city,
    ZIPCode,
    address,
    purpose,
    description,
    isOccupied,
    occupiedTime,
    googlePlusCode,
  } = facility;
  const facilityDictionary = dictionary.singleFacility;

  return (
    <StyledSingleFacility>
      <FacilityStatus isOccupied={isOccupied} occupiedTime={occupiedTime} />
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
      <SingleFacilityItem
        fieldName={facilityDictionary.purpose}
        fieldText={purpose}
      />
      {description && (
        <SingleFacilityItem
          fieldName={facilityDictionary.description}
          fieldText={description}
        />
      )}
      {googlePlusCode && (
        <SingleFacilityItem
          fieldName={facilityDictionary.googlePlusCode}
          fieldText={googlePlusCode}
        />
      )}
    </StyledSingleFacility>
  );
};

const StyledSingleFacility = styled.section`
  background-color: ${({ theme }) => theme.colors.singleFacilityBg};
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;

export default SingleFacility;

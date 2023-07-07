import { styled } from "styled-components";

import dictionary from "../../dictionaries/components.json";

interface FacilityStatusProps {
  isOccupied: boolean;
  occupiedTime: Date;
}

const FacilityStatus = ({ isOccupied, occupiedTime }: FacilityStatusProps) => {
  const facilityDictionary = dictionary.singleFacility;
  const getStatusContent = () => {
    if (isOccupied) {
      return occupiedTime
        ? `${facilityDictionary.occupiedWithTime} ${occupiedTime}`
        : facilityDictionary.occupied;
    }
    return facilityDictionary.unoccupied;
  };
  return (
    <StyledFacilityStatus isOccupied={isOccupied.toString()}>
      {getStatusContent()}
    </StyledFacilityStatus>
  );
};

const StyledFacilityStatus = styled.p<{ isOccupied: string }>`
  font-weight: 600;
  color: ${({ isOccupied, theme }) =>
    isOccupied === "true"
      ? theme.colors.occupiedFacility
      : theme.colors.unoccupiedFacility};
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20px;
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    width: 16px;
    height: 16px;
    background-color: ${({ isOccupied, theme }) =>
      isOccupied === "true"
        ? theme.colors.occupiedFacility
        : theme.colors.unoccupiedFacility};
    border-radius: 50%;
  }
`;

export default FacilityStatus;

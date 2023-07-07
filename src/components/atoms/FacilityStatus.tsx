import { styled } from "styled-components";

import dictionary from "../../dictionaries/components.json";

interface FacilityStatusProps {
  isOccupied: boolean;
  occupiedTime: Date;
  withoutCircle?: boolean;
}

const FacilityStatus = ({
  isOccupied,
  occupiedTime,
  withoutCircle,
}: FacilityStatusProps) => {
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
    <StyledFacilityStatus
      isOccupied={isOccupied.toString()}
      withoutCircle={withoutCircle ? "true" : "false"}
    >
      {getStatusContent()}
    </StyledFacilityStatus>
  );
};

const StyledFacilityStatus = styled.p<{
  isOccupied: string;
  withoutCircle: string;
}>`
  font-weight: 600;
  color: ${({ isOccupied, theme }) =>
    isOccupied === "true"
      ? theme.colors.occupiedFacility
      : theme.colors.unoccupiedFacility};
  position: relative;
  display: flex;
  align-items: center;
  margin-left: ${({ withoutCircle }) =>
    withoutCircle === "true" ? "0px" : "20px"};
  &::before {
    display: ${({ withoutCircle }) =>
      withoutCircle === "true" ? "none" : "block"};
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

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
        ? `${facilityDictionary.occupiedWithTime} ${new Date(occupiedTime).toLocaleString()}`
        : facilityDictionary.occupied;
    }
    return facilityDictionary.unoccupied;
  };
  return (
    <StyledFacilityStatus
      isoccupied={isOccupied.toString()}
      withoutcircle={withoutCircle ? "true" : "false"}
    >
      {getStatusContent()}
    </StyledFacilityStatus>
  );
};

const StyledFacilityStatus = styled.p<{
  isoccupied: string;
  withoutcircle: string;
}>`
  font-weight: 600;
  color: ${({ isoccupied, theme }) =>
    isoccupied === "true"
      ? theme.colors.occupiedFacility
      : theme.colors.unoccupiedFacility};
  position: relative;
  display: flex;
  align-items: center;
  margin-left: ${({ withoutcircle }) =>
    withoutcircle === "true" ? "0px" : "20px"};
  &::before {
    display: ${({ withoutcircle }) =>
      withoutcircle === "true" ? "none" : "block"};
    content: "";
    position: absolute;
    left: -20px;
    width: 16px;
    height: 16px;
    background-color: ${({ isoccupied, theme }) =>
      isoccupied === "true"
        ? theme.colors.occupiedFacility
        : theme.colors.unoccupiedFacility};
    border-radius: 50%;
  }
`;

export default FacilityStatus;

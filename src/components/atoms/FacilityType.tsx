import { styled } from "styled-components";

import { ReactComponent as TennisIcon } from "../../assets/icons/tennis.svg";
import { ReactComponent as SoccerIcon } from "../../assets/icons/soccer.svg";
import { ReactComponent as BasketballIcon } from "../../assets/icons/basketball.svg";
import { ReactComponent as VolleyballIcon } from "../../assets/icons/volleyball.svg";

export enum FacilityTypes {
  TENNIS = "tennis",
  SOCCER = "soccer",
  BASKETBALL = "basketball",
  VOLLEYBALL = "volleyball",
}

interface FacilityTypeProps {
  type: FacilityTypes;
}

const FacilityType = ({ type }: FacilityTypeProps) => {
  let content;
  switch (type) {
    case FacilityTypes.TENNIS:
      content = (
        <>
          <TennisIcon /> Tenis
        </>
      );
      break;
    case FacilityTypes.SOCCER:
      content = (
        <>
          <SoccerIcon /> Piłka nożna
        </>
      );
      break;
    case FacilityTypes.BASKETBALL:
      content = (
        <>
          <BasketballIcon /> Koszykówka
        </>
      );
      break;
    case FacilityTypes.VOLLEYBALL:
      content = (
        <>
          <VolleyballIcon /> Siatkówka
        </>
      );
      break;
    default:
      return null;
  }
  return <StyledFacilityType>{content}</StyledFacilityType>;
};

const StyledFacilityType = styled.div`
  color: ${({ theme }) => theme.colors.facilityTypeText};
  background-color: ${({ theme }) => theme.colors.facilityTypeBg};
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-weight: 600;

  svg {
    fill: ${({ theme }) => theme.colors.facilityTypeText};
    margin-right: 5px;
    scale: 0.7;
  }
`;

export default FacilityType;

import { ReactNode } from "react";
import { styled } from "styled-components";

interface SingleFacilityItemProps {
  fieldName: string;
  fieldText: string | ReactNode;
}

const SingleFacilityItem = ({
  fieldName,
  fieldText,
}: SingleFacilityItemProps) => {
  return (
    <StyledSingleFacilityItem>
      <b>{fieldName}</b>{" "}
      <span>{fieldText}</span>
    </StyledSingleFacilityItem>
  );
};

const StyledSingleFacilityItem = styled.p``;

export default SingleFacilityItem;

import { styled } from "styled-components";

import ListView from "./ListView";
import MapView from "./MapView";

import { IFacility } from "../../pages/HomePage/types";

interface DesktopViewProps {
  facilities: IFacility[];
}

const DesktopView = ({ facilities }: DesktopViewProps) => {
  return (
    <StyledDesktopView>
      <ListView facilities={facilities} />
      <StyledMapWrapper>
        <MapView facilities={facilities} />
      </StyledMapWrapper>
    </StyledDesktopView>
  );
};

const StyledDesktopView = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 991px) {
    display: none;
  }
`;

const StyledMapWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
`;

export default DesktopView;

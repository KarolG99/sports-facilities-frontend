import { useState } from "react";
import { IFacility, ViewsType } from "../../pages/HomePage/types";

import ToggleView from "../atoms/ToggleView";
import ListView from "./ListView";
import MapView from "./MapView";
import { styled } from "styled-components";
import QuickReservationInfo from "../molecules/QuickReservationInfo";

const selectedViewFromSessionStorage = sessionStorage.getItem("selectedView");

interface MobileViewProps {
  facilities: IFacility[];
}

const MobileView = ({ facilities }: MobileViewProps) => {
  const [selectedView, setSelectedView] = useState(
    selectedViewFromSessionStorage || ViewsType.LIST_VIEW
  );

  return (
    <StyledMobileView>
      <ToggleView
        selectedView={selectedView}
        setListView={() => {
          setSelectedView(ViewsType.LIST_VIEW);
          sessionStorage.setItem("selectedView", ViewsType.LIST_VIEW);
        }}
        setMapView={() => {
          setSelectedView(ViewsType.MAP_VIEW);
          sessionStorage.setItem("selectedView", ViewsType.MAP_VIEW);
        }}
      />

      <QuickReservationInfo />

      {selectedView === ViewsType.LIST_VIEW && (
        <ListView facilities={facilities} />
      )}
      {selectedView === ViewsType.MAP_VIEW && (
        <MapView facilities={facilities} />
      )}
    </StyledMobileView>
  );
};

const StyledMobileView = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

export default MobileView;

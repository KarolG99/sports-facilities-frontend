import { styled } from "styled-components";

import Heading from "../components/atoms/Heading";

import dictionary from "../dictionaries/pages.json";
import ToggleView from "../components/atoms/ToggleView";
import { useState } from "react";

export enum ViewsType {
  LIST_VIEW = "listView",
  MAP_VIEW = "mapView",
}

const HomePage = () => {
  const [selectedView, setSelectedView] = useState(ViewsType.LIST_VIEW);
  const homeDictionary = dictionary.home;
  return (
    <StyledMain>
      <Heading level={1} title={homeDictionary.title} />
      <ToggleView
        selectedView={selectedView}
        setListView={() => setSelectedView(ViewsType.LIST_VIEW)}
        setMapView={() => setSelectedView(ViewsType.MAP_VIEW)}
      />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  h1 {
    margin: 10px auto;
    padding: 0;
    width: fit-content;
    text-align: center;
  }
`;

export default HomePage;

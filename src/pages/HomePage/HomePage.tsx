import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Heading from "../../components/atoms/Heading";
import ToggleView from "../../components/atoms/ToggleView";
import ListView from "../../components/views/ListView";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import Loading from "../../components/molecules/Loading";

import { getAllFacilities } from "../../serviceCalls/getAllFacilities";

import { IFacility, ViewsType } from "./types";
import { ErrorMessagesType } from "../../components/atoms/ErrorMessage/types";

import dictionary from "../../dictionaries/pages.json";
import MapView from "../../components/views/MapView";

const selectedViewFromSessionStorage = sessionStorage.getItem("selectedView");

const HomePage = () => {
  const [selectedView, setSelectedView] = useState(
    selectedViewFromSessionStorage || ViewsType.LIST_VIEW
  );
  const [facilities, setFacilities] = useState<IFacility[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const homeDictionary = dictionary.home;

  useEffect(() => {
    setIsLoading(true);
    getAllFacilities()
      .then((data) => {
        setFacilities(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <StyledMain>
      <Heading level={1} title={homeDictionary.title} />
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

      {isLoading && !isError && <Loading />}
      {!isLoading && isError && (
        <ErrorMessage errorType={ErrorMessagesType.FETCH_ERROR_MESSAGE} />
      )}
      {!isLoading &&
        !isError &&
        facilities.length > 0 &&
        selectedView === ViewsType.LIST_VIEW && (
          <ListView facilities={facilities} />
        )}
      {!isLoading &&
        !isError &&
        facilities.length > 0 &&
        selectedView === ViewsType.MAP_VIEW && (
          <MapView facilities={facilities} />
        )}
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

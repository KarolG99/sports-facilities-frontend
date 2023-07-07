import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Heading from "../../components/atoms/Heading";
import ToggleView from "../../components/atoms/ToggleView";

import { getAllFacilities } from "../../serviceCalls/getAllFacilities";

import { ViewsType } from "./types";
import { ErrorMessagesType } from "../../components/atoms/ErrorMessage/types";

import Loading from "../../components/molecules/Loading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";

import dictionary from "../../dictionaries/pages.json";

const HomePage = () => {
  const [selectedView, setSelectedView] = useState(ViewsType.LIST_VIEW);
  const [facilities, setFacilities] = useState(null);
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
        setListView={() => setSelectedView(ViewsType.LIST_VIEW)}
        setMapView={() => setSelectedView(ViewsType.MAP_VIEW)}
      />

      {isLoading && !isError && <Loading />}
      {!isLoading && isError && (
        <ErrorMessage errorType={ErrorMessagesType.FETCH_ERROR_MESSAGE} />
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

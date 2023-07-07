import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Heading from "../../components/atoms/Heading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import Loading from "../../components/molecules/Loading";
import MobileView from "../../components/views/MobileView";
import DesktopView from "../../components/views/DesktopView";

import { getAllFacilities } from "../../serviceCalls/getAllFacilities";

import { IFacility } from "./types";
import { ErrorMessagesType } from "../../components/atoms/ErrorMessage/types";

import dictionary from "../../dictionaries/pages.json";


const HomePage = () => {
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

      {isLoading && !isError && <Loading />}
      {!isLoading && isError && (
        <ErrorMessage errorType={ErrorMessagesType.FETCH_ERROR_MESSAGE} />
      )}
      {!isLoading && !isError && facilities.length > 0 && (
        <>
          <MobileView facilities={facilities} />
          <DesktopView facilities={facilities} />
        </>
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

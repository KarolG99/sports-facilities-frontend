import { styled } from "styled-components";
import Heading from "../../components/atoms/Heading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookingFacilityInfo from "../../components/organisms/BookingFacilityInfo";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import Loading from "../../components/molecules/Loading";
import { ErrorMessagesType } from "../../components/atoms/ErrorMessage/types";
import QuickBookingForm from "../../components/organisms/QuickBookingForm";

import { IFacility } from "../HomePage/types";

import { getSingleFacility } from "../../serviceCalls/getSingleFacility";

import dictionary from "../../dictionaries/pages.json";

const BookFacilityPage = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState<IFacility>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const bookFacilityDictionary = dictionary.bookFacility;

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getSingleFacility(id)
        .then((data) => {
          setFacility(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <StyledMain>
      <Heading level={1} title={bookFacilityDictionary.title} />

      {isLoading && !isError && <Loading />}
      {!isLoading && isError && (
        <ErrorMessage errorType={ErrorMessagesType.FETCH_ERROR_MESSAGE} />
      )}

      {!isLoading && !isError && facility && (
        <>
          <BookingFacilityInfo facility={facility} />
          {!facility.isOccupied && <QuickBookingForm facilityId={id} />}
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

export default BookFacilityPage;

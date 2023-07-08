import React, { useState } from "react";
import { styled } from "styled-components";

import Heading from "../atoms/Heading";
import TimeSelect from "../atoms/TimeSelect";
import QuickBookingFormButton from "../atoms/QuickBookingFormButton";
import ErrorMessage from "../atoms/ErrorMessage/ErrorMessage";
import { ErrorMessagesType } from "../atoms/ErrorMessage/types";

import { bookFacility } from "../../serviceCalls/bookFacility";

import { availableBookingTimes } from "../../data/quickBookingFormData";
import dictionary from "../../dictionaries/components.json";


interface QuickBookingFormProps {
  facilityId: string | undefined;
}

const QuickBookingForm = ({ facilityId }: QuickBookingFormProps) => {
  const [selectedValue, setSelectedValue] = useState<{
    value: number;
    text: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [isError, setIsError] = useState(false);
  const quickBookingFormDictionary = dictionary.QuickBookingForm;

  const handleSelectValue = (e: any) => {
    const targetValue = Number(e.target.value);
    const targetText = e.target.childNodes[0].data;
    if (!selectedValue) {
      setSelectedValue({ value: targetValue, text: targetText });
    } else if (selectedValue && targetValue !== selectedValue.value) {
      setSelectedValue({ value: targetValue, text: targetText });
    } else setSelectedValue(null);
  };

  const handleBookFacility = (occupiedMinutes: number) => {
    if (facilityId) {
      setIsLoading(true);
      bookFacility(facilityId, occupiedMinutes)
        .then((response) => {
          setIsLoading(false);
          setIsBooked(true);
          setSelectedValue(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  return (
    <StyledQuickBookingForm>
      <Heading level={4} title={quickBookingFormDictionary.title} />

      <StyledTimeSelectWrapper>
        {availableBookingTimes.map(({ value, text }) => (
          <TimeSelect
            key={value}
            value={value}
            text={text}
            onClick={(e: any) => handleSelectValue(e)}
            selectedValue={selectedValue?.value}
          />
        ))}
      </StyledTimeSelectWrapper>

      {isError && (
        <ErrorMessage errorType={ErrorMessagesType.BOOK_ERROR_MESSAGE} />
      )}

      <QuickBookingFormButton
        quickBookingFormButtonDictionary={quickBookingFormDictionary.button}
        selectedValue={selectedValue}
        isLoading={isLoading}
        isBooked={isBooked}
        disabled={!selectedValue || isBooked || isLoading}
        onClick={() => {
          if (selectedValue?.value) {
            handleBookFacility(selectedValue?.value);
          }
        }}
      />
    </StyledQuickBookingForm>
  );
};

const StyledQuickBookingForm = styled.div`
  background-color: ${({ theme }) => theme.colors.quickBookingFormBg};
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  -webkit-box-shadow: 0px -2px 37px -24px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px -2px 37px -24px rgba(66, 68, 90, 1);
  box-shadow: 0px -2px 37px -24px rgba(66, 68, 90, 1);
`;

const StyledTimeSelectWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap row;
  gap: 10px;
  max-width: 500px;
  margin: auto;
`;

export default QuickBookingForm;

import React from "react";
import { styled } from "styled-components";

interface QuickBookingFormButtonProps {
  quickBookingFormButtonDictionary: {
    loadingText: string;
    bookedText: string;
    bookingText: string;
  };
  selectedValue?: {
    value: number;
    text: string;
  } | null;
  isLoading: boolean;
  isBooked: boolean;
  disabled: boolean;
  onClick: () => void;
}

const QuickBookingFormButton = ({
  quickBookingFormButtonDictionary,
  selectedValue,
  isLoading,
  isBooked,
  disabled,
  onClick,
}: QuickBookingFormButtonProps) => {
  return (
    <StyledQuickBookingFormButton disabled={disabled} onClick={onClick}>
      {isLoading && quickBookingFormButtonDictionary.loadingText}
      {!isLoading && isBooked && quickBookingFormButtonDictionary.bookedText}
      {!isLoading && !isBooked && (
        <>
          {quickBookingFormButtonDictionary.bookingText}
          {selectedValue?.text && ` na ${selectedValue.text}`}
        </>
      )}
    </StyledQuickBookingFormButton>
  );
};

const StyledQuickBookingFormButton = styled.button`
  background-color: ${({ theme }) => theme.colors.quickBookingFormButtonBg};
  color: ${({ theme }) => theme.colors.quickBookingFormButtonText};
  border: none;
  width: 95%;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.button};
  max-width: 500px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }
`;

export default QuickBookingFormButton;

import { styled } from "styled-components";

import { ErrorMessagesProps, ErrorMessagesType } from "./types";

import dictionary from "../../../dictionaries/components.json";

const ErrorMessage = ({ errorType }: ErrorMessagesProps) => {
  const errorMessagesDictionary = dictionary.errorMessages;

  switch (errorType) {
    case ErrorMessagesType.FETCH_ERROR_MESSAGE:
      return (
        <StyledErrorMessage>
          {errorMessagesDictionary.fetching}
        </StyledErrorMessage>
      );
    default:
      return (
        <StyledErrorMessage>
          {errorMessagesDictionary.default}
        </StyledErrorMessage>
      );
  }
};

const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.errorText};
  background-color: ${({ theme }) => theme.colors.errorBg};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.paragraphError};
  width: fit-content;
  max-width: 95%;
  text-align: center;
  margin: 40px auto auto auto;
  padding: 5px 8px;
  border-radius: 8px;
`;

export default ErrorMessage;

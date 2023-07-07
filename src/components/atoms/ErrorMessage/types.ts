export enum ErrorMessagesType {
  FETCH_ERROR_MESSAGE = "fetch",
}

export interface ErrorMessagesProps {
  errorType?: ErrorMessagesType;
}

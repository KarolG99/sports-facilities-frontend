export enum ErrorMessagesType {
  FETCH_ERROR_MESSAGE = "fetch",
  BOOK_ERROR_MESSAGE = "book",
}

export interface ErrorMessagesProps {
  errorType?: ErrorMessagesType;
}

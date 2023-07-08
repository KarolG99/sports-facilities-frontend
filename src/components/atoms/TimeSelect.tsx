import React from "react";
import { styled } from "styled-components";

interface TimeSelectProps {
  text: string;
  value: number;
  onClick: (e: any) => void;
  selectedValue: number | undefined;
}

const TimeSelect = ({
  text,
  value,
  onClick,
  selectedValue,
}: TimeSelectProps) => {
  return (
    <StyledTimeSelectButton
      value={value}
      onClick={onClick}
      selected={selectedValue === value ? "selected" : ""}
    >
      {text}
    </StyledTimeSelectButton>
  );
};

const StyledTimeSelectButton = styled.button<{ selected: string }>`
  background-color: ${({ theme }) => theme.colors.timeSelectBg};
  color: ${({ theme }) => theme.colors.timeSelectText};
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 5px;
  width: fit-content;
  font-size: 0.9rem;
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected === "selected"
      ? `2px solid ${theme.colors.timeSelectText}`
      : "2px solid transparent"};
`;

export default TimeSelect;

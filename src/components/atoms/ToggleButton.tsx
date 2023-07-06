import dictionary from "../../dictionaries/pages.json";

import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/map.svg";
import { styled } from "styled-components";

const ToggleButton = () => {
  const toggleButtonDictionary = dictionary.home.toggleButton;

  return (
    <StyledToggleWrapper>
      <StyledButton>
        <ListIcon />
        <span>{toggleButtonDictionary.option1.name}</span>
      </StyledButton>
      <StyledButton>
        <MapIcon />
        <span>{toggleButtonDictionary.option2.name}</span>
      </StyledButton>
    </StyledToggleWrapper>
  );
};

const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  max-width: 700px;
  margin: 20px auto;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.toggleText};
  font-size: ${({ theme }) => theme.fontSizes.toggleOption};
  color: ${({ theme }) => theme.colors.toggleText};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;

  span {
    margin-left: 5px;
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.activeToggleItem};
    font-weight: 600;
    svg {
      stroke-width: 2px;
    }
  }

  svg {
    width: 25px;
    display: block;
  }
`;

export default ToggleButton;

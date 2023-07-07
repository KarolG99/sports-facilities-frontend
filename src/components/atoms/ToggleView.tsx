import { styled } from "styled-components";

import dictionary from "../../dictionaries/pages.json";

import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/map.svg";
import { ViewsType } from "../../pages/HomePage";

interface ToggleViewProps {
  selectedView: string;
  setListView: () => void;
  setMapView: () => void;
}

const ToggleView = ({ selectedView, setListView, setMapView }: ToggleViewProps) => {
  const toggleViewDictionary = dictionary.home.toggleView;

  return (
    <StyledToggleWrapper>
      <StyledButton active={selectedView === ViewsType.LIST_VIEW} onClick={setListView}>
        <ListIcon />
        <span>{toggleViewDictionary.option1.name}</span>
      </StyledButton>
      <StyledButton active={selectedView === ViewsType.MAP_VIEW} onClick={setMapView}>
        <MapIcon />
        <span>{toggleViewDictionary.option2.name}</span>
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

const StyledButton = styled.button<{ active: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.activeToggleItem : "transparent"};
  border: 1px solid ${({ theme }) => theme.colors.toggleText};
  font-size: ${({ theme }) => theme.fontSizes.toggleOption};
  font-weight: ${({ active }) => (active ? 600 : 400)};
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
  svg {
    width: 25px;
    display: block;
    stroke-width: ${({ active }) => (active ? 2 : 1)};
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export default ToggleView;

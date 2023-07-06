import { styled } from "styled-components";

import Heading from "../components/atoms/Heading";

import dictionary from "../dictionaries/pages.json";
import ToggleButton from "../components/atoms/ToggleButton";

const HomePage = () => {
  const homeDictionary = dictionary.home;
  return (
    <StyledMain>
      <Heading level={1} title={homeDictionary.title} />
      <ToggleButton />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  h1 {
    margin: 10px auto;
    padding: 0;
    width: fit-content;
  }
`;

export default HomePage;

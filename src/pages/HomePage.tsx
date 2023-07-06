import { styled } from "styled-components";

import Heading from "../components/atoms/Heading";

import dictionary from "../dictionaries/pages.json";

const HomePage = () => {
  const homeDictionary = dictionary.home;
  return (
    <StyledMain>
      <Heading level={1} title={homeDictionary.title} />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  h1 {
    margin: 0;
    padding: 0;
  }
`;

export default HomePage;

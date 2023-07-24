import React from "react";
import { styled } from "styled-components";

import dictionary from "../../dictionaries/pages.json";
import Heading from "../../components/atoms/Heading";
import CreateFacilityForm from "../../forms/CreateFacilityForm/CreateFacilityForm";

const CreateFacilityPage = () => {
  const createFacilityDictionary = dictionary.createFacility;

  return (
    <StyledMain>
      <Heading level={1} title={createFacilityDictionary.title} />

      <CreateFacilityForm />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  h1 {
    margin: 10px auto;
    padding: 0;
    width: fit-content;
    text-align: center;
  }
`;

export default CreateFacilityPage;

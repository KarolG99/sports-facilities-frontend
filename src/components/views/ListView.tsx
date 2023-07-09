import { styled } from "styled-components";

import SingleFacility from "../organisms/SingleFacility";

import { IFacility } from "../../pages/HomePage/types";

interface ListViewProps {
  facilities: IFacility[];
}

const ListView = ({ facilities }: ListViewProps) => {
  return (
    <StyledListView>
      {facilities.map((facility) => (
        <SingleFacility facility={facility} key={facility._id} />
      ))}
    </StyledListView>
  );
};

const StyledListView = styled.article`
  width: 95%;
  margin: 30px auto auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    max-width: 500px;
  }
`;

export default ListView;

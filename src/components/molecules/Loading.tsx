import { Player } from "@lottiefiles/react-lottie-player";
import { styled } from "styled-components";

import dictionary from "../../dictionaries/components.json";

const Loading = () => {
  const loadingDictionary = dictionary.loading;
  return (
    <StyledLoadingWrapper>
      <Player
        src="https://assets4.lottiefiles.com/packages/lf20_W8MjcYzXzC.json"
        loop
        autoplay
      />
      <p>{loadingDictionary.message}</p>
    </StyledLoadingWrapper>
  );
};

const StyledLoadingWrapper = styled.div`
  width: 90%;
  max-width: 370px;
  margin: 40px auto auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.paragraphLoading};
  }
`;

export default Loading;

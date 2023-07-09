import { useState } from "react";
import { styled } from "styled-components";

import Heading from "../atoms/Heading";
import { ReactComponent as QrcodeIcon } from "../../assets/icons/qrcode.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import dictionary from "../../dictionaries/components.json";

const QuickReservationInfo = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const quickReservationInfoDictionary = dictionary.QuickReservationInfo;

  const handleOpenCloseInfo = (value: boolean) => {
    setIsInfoOpen(value);
  };

  return (
    <StyledQuickReservationInfo>
      <StyledQuickReservationButton onClick={() => handleOpenCloseInfo(true)}>
        <QrcodeIcon />
        {quickReservationInfoDictionary.buttonText}
      </StyledQuickReservationButton>

      {isInfoOpen && (
        <>
          <StyledQuickReservationInfoPopup>
            <StyledCloseButton onClick={() => handleOpenCloseInfo(false)}>
              <CloseIcon />
            </StyledCloseButton>
            <Heading
              level={4}
              title={quickReservationInfoDictionary.info.title}
            />
            <p>{quickReservationInfoDictionary.info.text}</p>
          </StyledQuickReservationInfoPopup>
          <StyledShadowElement onClick={() => handleOpenCloseInfo(false)} />
        </>
      )}
    </StyledQuickReservationInfo>
  );
};

const StyledQuickReservationInfo = styled.section`
  width: fit-content;
  margin: 20px auto;
`;

const StyledQuickReservationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.quickReservatioinInfoText};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.infoButton};

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 20px;
  }
`;

const StyledQuickReservationInfoPopup = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.quickReservatioinInfoPopup};
  padding: 20px 15px;
  width: calc(100% - 20px);
  max-width: 400px;
  left: 50%;
  transform: translate(-50%);
  /* map index: 1000 */
  z-index: 1002;
  border-radius: 10px;
  text-align: center;
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${({ theme }) => theme.colors.basicColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledShadowElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.colors.shadowElement};
  /* map index: 1000 */
  z-index: 1001;
`;

export default QuickReservationInfo;

import { styled } from "styled-components";

import { ReactComponent as Logo } from "../../assets/icons/KGLogo.svg";

import dictionary from "../../dictionaries/components.json";

const Footer = () => {
  const footerDictionary = dictionary.footer;
  return (
    <StyledFooter>
      <StyledAuthorLink
        href="https://karolgucwa.pl/"
        target="_blank"
        rel="noreferrer"
      >
        {footerDictionary.author} <Logo />
      </StyledAuthorLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 95%;
  max-width: 500px;
  margin: 30px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.footerAuthor};
`;

const StyledAuthorLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.footerText};
  svg {
    margin-left: 3px;
    width: 15px;
    height: 15px;
  }
`;

export default Footer;

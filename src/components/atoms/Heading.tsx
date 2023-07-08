import React from "react";
import styled from "styled-components";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  level: number;
  title: string;
}

const HeadingStyles = styled.h1`
  color: ${({ theme }) => theme.colors.headingPrimary};
  font-weight: 900;
`;

const Heading1 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading1};
`;

const Heading2 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading2};
`;

const Heading3 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading3};
`;

const Heading4 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading4};
  font-weight: 800;
`;

const Heading5 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading5};
  font-weight: 800;
`;

const Heading6 = styled(HeadingStyles)`
  font-size: ${({ theme }) => theme.fontSizes.heading6};
  font-weight: 800;
`;

const Heading = ({ level = 1, title, ...rest }: HeadingProps) => {
  let HeadingComponent;

  switch (level) {
    case 1:
      HeadingComponent = Heading1;
      break;
    case 2:
      HeadingComponent = Heading2;
      break;
    case 3:
      HeadingComponent = Heading3;
      break;
    case 4:
      HeadingComponent = Heading4;
      break;
    case 5:
      HeadingComponent = Heading5;
      break;
    case 6:
      HeadingComponent = Heading6;
      break;
    default:
      HeadingComponent = Heading1;
      break;
  }

  return <HeadingComponent>{title}</HeadingComponent>;
};

export default Heading;

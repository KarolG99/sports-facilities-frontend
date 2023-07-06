import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
}
*, *::after, *::before {
    box-sizing: inherit;
}
body {
    font-family: 'Chillax', sans-serif;
    overflow-x: hidden;
    max-width: 100vw;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
}
a, button, textarea {
    font-family: 'Chillax', sans-serif;
}
`;

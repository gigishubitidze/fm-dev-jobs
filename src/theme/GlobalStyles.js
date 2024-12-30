import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p {
    margin: 0;
    padding: 0;
  }
  
  input, button{
    font: inherit;
  }

  html {
    font-size: ${({ theme }) => theme.fontSizeBase || "16px"};
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily || "'Arial', sans-serif"};
    font-size: 1rem; 
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default GlobalStyles;

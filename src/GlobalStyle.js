import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
  body {
    background-color: ${({ theme }) => theme.color.galery};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: 0 auto;
  }
  
`;

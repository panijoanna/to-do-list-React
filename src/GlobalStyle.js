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
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.mineShaft};
    font-family: 'proxima-nova', sans-serif;
    letter-spacing: 0.2px;
    font-size: 16px;
    margin: 0 auto 50px auto;
    overflow-y: scroll;
    line-height: 1.6;
  }
  
`;

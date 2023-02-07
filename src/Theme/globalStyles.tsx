import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0F0D13;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  body * {
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;
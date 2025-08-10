import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html, body {
  overflow-x: hidden;
  }
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  .inner { width:1200px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  button { border:none; cursor: pointer; }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, 
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    height: 100%;
    margin: 0;
  }

  body {
    background-color: #fff;
    line-height: 1.4;
  }
  
  a:link,
  a:visited {
    color: #333;
  }

  a:hover, 
  a:focus {
    color: #202020;
  }

  code,
  pre {
    max-width: 100%;
    overflow: auto;
    margin: aoto;
  }
`;

import { createGlobalStyle } from 'styled-components';

export let GlobalStyles;
GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  };
  
  .main-poster {
    background: ${({theme}) => theme.background};
  };
  
  .feed {
    background: ${({theme}) => theme.background};
  };
  
  .theme-toggle {
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    border: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    border-radius: 228px;
    cursor: pointer;
  };
`
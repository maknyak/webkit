import { createGlobalStyle } from 'styled-components';
import { gray } from '@components/Core/style';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    color: ${gray[700]};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    text-align: left;
  }
`;

export default GlobalStyle;

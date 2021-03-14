import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Droid Sans Mono'
}`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 780px) {
    padding: 0 30px 0 30px;
  }
`;

export default GlobalStyle;

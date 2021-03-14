import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  padding: 0.3em;
  background: papayawhip;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-space-between;
`;

export const WrapContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: 1px 1px 2px;
  ${Container};
`;

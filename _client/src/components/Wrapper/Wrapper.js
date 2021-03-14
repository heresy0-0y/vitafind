import React from "react";
import { Wrap, WrapContainer } from "./Wrapper.elements";

const Wrapper = (props) => {
  return (
    <>
      <Wrap>
        {props.children}
        <WrapContainer></WrapContainer>
      </Wrap>
    </>
  );
};

export default Wrapper;

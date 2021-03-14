import React from "react";

import { StyledLink, LinkContainer } from "./VitaLink.elements";

const VitaLink = (props) => {
  return (
    <>
      <LinkContainer>
        <StyledLink>
          {props.children}
        </StyledLink>
      </LinkContainer>
    </>
  );
};

export default VitaLink
import React from "react";
import { ThemeProvider } from "styled-components";

import MyButton from "../components/MyButton";
import { Wrapper, VitaLink} from "../components";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <Wrapper>
      <div className="App">
        <header>
          <VitaLink to="/">
            <h1>VITAFINDA</h1>
          </VitaLink>
          {currentUser ? (
            <>
              <p>{currentUser.username}</p>
              <MyButton onClick={handleLogout}>Logout</MyButton>
            </>
          ) : (
            <VitaLink to="/login">Login/Register</VitaLink>
          )}
          <hr />
          {currentUser && (
            <>
              <VitaLink to="/supplements">Supplements</VitaLink>
              <VitaLink to="/vitamins">Vitamins</VitaLink>
              <VitaLink to="/brands">Brands</VitaLink>
              <hr />
            </>
          )}
        </header>
        {props.children}
      </div>
    </Wrapper>
  );
}

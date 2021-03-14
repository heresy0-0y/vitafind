import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
// import Wrapper from "../components/Wrapper/Wrapper";
import MyButton from "../components/MyButton";
import { Wrapper } from "../components";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <Wrapper>
      <div className="App">
        <header>
          <Link to="/">
            <h1>VITAFINDA</h1>
          </Link>
          {currentUser ? (
            <>
              <p>{currentUser.username}</p>
              <MyButton onClick={handleLogout}>Logout</MyButton>
            </>
          ) : (
            <Link to="/login">Login/Register</Link>
          )}
          <hr />
          {currentUser && (
            <>
              <Link to="/supplements">Supplements</Link>
              <Link to="/vitamins">Vitamins</Link>
              <Link to="/brands">Brands</Link>
              <hr />
            </>
          )}
        </header>
        {props.children}
      </div>
    </Wrapper>
  );
}

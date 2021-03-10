import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>VITAFINDA</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
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
  );
}

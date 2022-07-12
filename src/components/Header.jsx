import React from "react";

export default function Header() {
  return (
    <>
      <div className="full-wrapper header">
        <div className="wrapper">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">expertise</a>
                <a href="#">teams</a>
                <a href="#">works</a>
                <a href="#">people say</a>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </>
  );
}

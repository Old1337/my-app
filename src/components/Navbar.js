import React from "react";
import ReactLogo from "../images/logo.png";

export default function Navbar(props) {
  return (
    <header className={props.darkMode ? "header" : "header light"}>
      <nav className="d-flex justify-content-between align-items-center">
        <div className="nav-logo d-flex align-items-center gap-3">
          <img className="nav-img" src={ReactLogo} alt="" />
          <h2 className="nav-title fw-bold">ReactFacts</h2>
        </div>

        <div className="toggler d-flex text-white align-items-center gap-2">
          <p className="toggler--light m-0">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark m-0">Dark</p>
        </div>
      </nav>
    </header>
  );
}

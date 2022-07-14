import React from "react";
import ReactLogo from "../images/logo.png";

export default function Navbar() {
  return (
    <header className=" p-5">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="nav-logo d-flex align-items-center gap-3">
          <img className="nav-img" src={ReactLogo} alt="" />
          <h2 className="nav-title fw-bold">ReactFacts</h2>
        </div>
        <h3 className="text-white fs-4">React Course - Project 1</h3>
      </nav>
    </header>
  );
}

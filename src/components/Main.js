import React from "react";

export default function Main(props) {
  return (
    <section className={props.darkMode ? "main" : "main light"}>
      <h3 className="main-title fs-1 fw-bold">Fun facts about React</h3>

      <ul className="react-features p-5 d-grid gap-3">
        <li className="react-feature ">Was firest released in 2013</li>
        <li className="react-feature">
          Was originally created by Jordan Walke
        </li>
        <li className="react-feature">Has well over 100K stars on GitHub</li>
        <li className="react-feature">Is maintained by Facebook</li>
        <li className="react-feature">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </section>
  );
}

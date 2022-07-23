import React from "react";
import '../../sass/style.scss';
import Cube from "../cube/Cube";

export default function Nav() {
  return (
    <div className="orbit">
      <div className="center-image"><Cube /> </div>
     
      <ul className="ulNav">
        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>Home</p>
        </li>

        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>About me</p>
        </li>

        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>Projects</p>
        </li>

        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>Contact</p>
        </li>

        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>Skills</p>
        </li>

        <li className="liNav">
          {/* <img src="" alt="" /> */}
          <p>Links</p>
        </li>
      </ul>
    </div>
  );
}

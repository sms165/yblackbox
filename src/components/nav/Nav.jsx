import React from "react";

import "../../sass/style.scss";
import Cube from "../cube/Cube";

import { HashLink } from "react-router-hash-link";

import { BrowserRouter as Router } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navContainer">
      <div className="navigation">
        <div className="orbit" id="orbit">
          <div className="center-image">
            <Cube />{" "}
          </div>
          <Router>
            <ul className="ulNav">
              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#certificatesLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>Certificates</p>
                    </div>
                  </HashLink>
                </div>
              </li>

              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#aboutLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>About me</p>
                    </div>
                  </HashLink>
                </div>
              </li>

              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#projectsLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>Projects</p>
                    </div>
                  </HashLink>
                </div>
              </li>

              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#contactLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    {/* <a href="#contactLink"> */}

                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>Contact</p>
                    </div>
                    {/* </a> */}
                  </HashLink>
                </div>
              </li>

              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#skillsLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>Skills</p>
                    </div>
                  </HashLink>
                </div>
              </li>

              <li className="liNav">
                <div className="content">
                  <HashLink
                    to="#degreeLink"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                  >
                    <div className="liNavCont">
                      {/* <img src="" alt="" /> */}
                      <p>Degrees</p>
                    </div>
                  </HashLink>
                </div>
              </li>
            </ul>
          </Router>
        </div>
      </div>
    </div>
  );
}

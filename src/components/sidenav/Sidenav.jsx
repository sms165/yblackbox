import React from "react";

import "../../sass/style.scss";

export default function Sidenav() {
  return (
    // <Router>
    <div className="sideNavigation ">
      <div className="reveal" id="blackbox">
        <div className="bbfont vertical">
          <span className="byfont yt big">Y</span>
          <span className="b big">B</span>
          <span className="bbfont letterName">LACK</span>
        </div>

        <p> </p>

        <p className="bbfont letterName vertical">
          <span className="b2 big">B</span>OX
        </p>
      </div>

      <div className="sectionAbout reveal" id="aboutMe">
        <p className="bfont smallLetter sideNavTextSection">ABOUT</p>
      </div>

      <div className="sectionProjects reveal" id="projectsTitle">
        <p className="bfont smallLetter sideNavTextSection ">PROJECTS</p>
      </div>

      <div className="sectionSkills reveal" id="skillsTitle">
        <p className="bfont smallLetter sideNavTextSection ">SKILLS</p>
      </div>

      <div className="sectionDegrees reveal" id="degreesTitle">
        <p className="bfont smallLetter sideNavTextSection ">DEGREES</p>
      </div>

      <div className="sectionCertificates reveal" id="certificatesTitle">
        <p className="bfont smallLetter sideNavTextSection ">CERTIFICATES</p>
      </div>

      <div className="sectionContact reveal" id="contactTitle">
        <p className="bfont smallLetter sideNavTextSection ">CONTACT</p>
      </div>
    </div>
  );
}

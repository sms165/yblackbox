import React from "react";
import "../../sass/style.scss";

import { useEffect, useState, useRef } from "react";

import Certificate from "../certificate/Certificate";

export default function Education() {
  const certificatesSideNav = useRef();
  const certificatesTitle = document.getElementById("certificatesTitle");
  const [certificatesSideNavIntersecting, setCertificatesSideNavIntersecting] =
    useState();
  // console.log('isIntersecting', contactSideNavIntersecting)
  useEffect(() => {
    let options = {
      threshold: 0.7,
    };
    // console.log('aboutSideNav', aboutSideNav.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCertificatesSideNavIntersecting(entry.isIntersecting);
      // console.log('entry', entry);
    }, options);
    observer.observe(certificatesSideNav.current);

    return () => {};
  }, []);

  if (certificatesSideNavIntersecting == true) {
    certificatesTitle.classList.add("active");
    certificatesTitle.classList.remove("reveal");
  }

  if (certificatesSideNavIntersecting == false) {
    if (certificatesTitle.classList.contains("active"))
      certificatesTitle.classList.remove("active");
    certificatesTitle.classList.add("reveal");
  }

  return (
    <>
      <div className="certificateContainer" ref={certificatesSideNav}>
        {/* <div className="certificationComp" > */}

        <Certificate />
        {/* </div> */}
        <br />
        <br />
        <br />
        <div className="certificateListContainer">
          <div className="certificationBox">
            {/* <div className="cert"> */}
            <div className="adobe">
              <h3>Adobe</h3>
              <p>Adobe Certified Expert in Photoshop</p>
              <p>Adobe Certified Expert in InDesign</p>
              <p>Adobe Certified Expert in PremierePro</p>
            </div>
            <br />
            <div className="web">
              <h3>Web</h3>
              <p>SEO Search Engine Optimization</p>
              <p>CIW Certified Internet Web Associate</p>
              <p>CIW Certified Internet Web Professional</p>
              <p>Microsoft JavaScript Certificate</p>
            </div>
            <br />
            <div className="proManag">
              <h3>Project Management</h3>
              <p>ITIL Foundation IT Service Management</p>
              <p>GPM Basis Certificate</p>
            </div>
          </div>
        </div>
      </div>
      <div id="certificatesLink"></div>
    </>
  );
}

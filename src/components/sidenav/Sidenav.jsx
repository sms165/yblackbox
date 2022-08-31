import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserHairLong,
  faThin
} from "@fortawesome/free-solid-svg-icons";
import "../../sass/style.scss";



import { HashLink } from 'react-router-hash-link';

import { BrowserRouter as Router } from 'react-router-dom'


export default function Sidenav() {


  return (
   
    // <Router>
      <div className="sideNavigation ">
         
   {/* <div className="y"></div>
    <p className="bfont y">Y</p> */}
    {/* <img className="imgSmall" src={logo} alt="" srcset="" /> */}
        <div className="reveal" id="blackbox">
         <p className="byfont yt ">Y</p>
        <p className="bbfont b">B</p>
        <p className="bbfont smallLetter">L</p>
        <p className="bbfont smallLetter a">A</p>
        <p className="bbfont smallLetter c">C</p>
        <p className="bbfont smallLetter k">K</p>
        <p> </p>
        <p className="bbfont b2">B</p>
        <p className="bbfont smallLetter o">O</p>
        <p className="bbfont smallLetter x">X</p>
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
  )
  }

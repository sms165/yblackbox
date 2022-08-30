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

       <div className="section reveal" id="aboutMe">
       <p className="bfont smallLetter ">A</p>
        <p className="bfont smallLetter about-b">B</p>
        <p className="bfont smallLetter about-o">O</p>
        <p className="bfont smallLetter about-u ">U</p>
        <p className="bfont smallLetter about-t">T</p>
        <p> </p>
        <p className="bfont smallLetter about-m">M</p>
        <p className="bfont smallLetter about-e">E</p>
       </div>

       <div className="sectionProjects reveal" id="projectsTitle">
       <p className="bfont smallLetter ">P</p>
        <p className="bfont smallLetter projects-r">R</p>
        <p className="bfont smallLetter projects-o">O</p>
        <p className="bfont smallLetter projects-j ">J</p>
        <p className="bfont smallLetter projects-e">E</p>
        <p className="bfont smallLetter projects-c">C</p>
        <p className="bfont smallLetter projects-t">T</p>
        <p className="bfont smallLetter projects-s">S</p>
       </div>

       <div className="sectionSkills reveal" id="skillsTitle">
       <p className="bfont smallLetter ">S</p>
        <p className="bfont smallLetter skills-k">K</p>
        <p className="bfont smallLetter skills-i">I</p>
        <p className="bfont smallLetter skills-l ">L</p>
        <p className="bfont smallLetter skills-ll">L</p>
        <p className="bfont smallLetter skills-s">S</p>
       </div>

       <div className="sectionDegrees reveal" id="degreesTitle">
       <p className="bfont smallLetter ">D</p>
        <p className="bfont smallLetter degrees-e">E</p>
        <p className="bfont smallLetter degrees-g">G</p>
        <p className="bfont smallLetter degrees-r ">R</p>
        <p className="bfont smallLetter degrees-ee">E</p>
        <p className="bfont smallLetter degrees-eee">E</p>
        <p className="bfont smallLetter degrees-s">S</p>
       </div>

       <div className="sectionCertificates reveal" id="certificatesTitle">
       <p className="bfont smallLetter ">C</p>
        <p className="bfont smallLetter certificates-e">E</p>
        <p className="bfont smallLetter certificates-r">R</p>
        <p className="bfont smallLetter certificates-t ">T</p>
        <p className="bfont smallLetter certificates-i">I</p>
        <p className="bfont smallLetter certificates-f">F</p>
        <p className="bfont smallLetter certificates-ii">I</p>
        <p className="bfont smallLetter certificates-c">C</p>
        <p className="bfont smallLetter certificates-a">A</p>
        <p className="bfont smallLetter certificates-tt">T</p>
        <p className="bfont smallLetter certificates-ee">E</p>
        <p className="bfont smallLetter certificates-s">S</p>
       </div>

       <div className="sectionContact reveal" id="contactTitle">
       <p className="bfont smallLetter ">C</p>
        <p className="bfont smallLetter contact-o">O</p>
        <p className="bfont smallLetter contact-n">N</p>
        <p className="bfont smallLetter contact-t ">T</p>
        <p className="bfont smallLetter contact-a">A</p>
        <p className="bfont smallLetter contact-c">C</p>
        <p className="bfont smallLetter contact-tt">T</p>
       </div>
   
    </div>
  )
  }

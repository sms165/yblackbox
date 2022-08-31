import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../sass/style.scss';

import { useEffect, useState, useRef } from 'react';


import uopeople from "../../assets/uopeople-text.svg";
import lutz from "../../assets/lutz.svg";
import cf from "../../assets/careerFoundry.svg";

import cert from "../../assets/cert.svg";
import Certificates from '../certificate/Certificate';

export default function Education() {
  
 
  const [isVisible, setIsVisible] = useState(false);

  
  const degreesSideNav = useRef();
  const degreesTitle = document.getElementById('degreesTitle');
const [degreesSideNavIntersecting, setDegreesSideNavIntersecting] = useState();
console.log('isIntersecting', degreesSideNavIntersecting)
useEffect(() => {
  let options = {
    threshold: .2
  }
  // console.log('aboutSideNav', aboutSideNav.current);
  const observer = new IntersectionObserver((entries) =>{
    const entry =entries[0];
    setDegreesSideNavIntersecting(entry.isIntersecting)
    // console.log('entry', entry);
  }, options) 
  observer.observe(degreesSideNav.current);

  

  return () => {
  };
}, []);


if(degreesSideNavIntersecting == true){
  degreesTitle.classList.add("active");
  degreesTitle.classList.remove("reveal");

   // education images
   let uopeopleImg = document.getElementById("uopeopleImg");
   let lutzImg = document.getElementById("lutzImg");
   let cfImg = document.getElementById("cfImg");
   console.log(uopeopleImg)
   uopeopleImg.classList.add("uopeopleImg");
   lutzImg.classList.add("lutzImg");
   cfImg.classList.add("cfImg");
   uopeopleImg.classList.remove("hidden");
   lutzImg.classList.remove("hidden");
   cfImg.classList.remove("hidden");
   uopeopleImg.classList.add("visible");
   lutzImg.classList.add("visible");
   cfImg.classList.add("visible");
}

if (degreesSideNavIntersecting == false) {
  if(degreesTitle.classList.contains("active")){
  degreesTitle.classList.remove("active");
  degreesTitle.classList.add("reveal");}
}
  

  

  return (
    <>
    <div className="educationContainer">
       
          <div className="uopeopleContainer">
            <div className="uopeopleImgContainer">
              <img
                id="uopeopleImg"
                className="uopeopleImg hidden"
                src={uopeople}
                alt="uopeople logo"
              />
            </div>
            <div className="degreeText">
              <p
                ref={degreesSideNav}
                className="uopeopleText anim-typewriter"
                id="uopeopleText"
              >
                Bachelor | Computer Science | 2020 - 2023
              </p>
            </div>
          </div>

          <div className="cfContainer">
            <div className="cfImgContainer">
              <img
                id="cfImg"
                src={cf}
                className="cfImg hidden"
                alt="careerFoundry logo"
              />
            </div>
            <div className="degreeText">
              <p className="cfText anim-typewriter-cf" id="degreeCfText">
                Bootcamp | Full-Stack Web Development | 2022
              </p>
            </div>
          </div>

          <div className="lutzContainer">
            <div className="lutzImgContainer">
              <img
                id="lutzImg"
                src={lutz}
                className="lutzImg hidden"
                alt="lutz grub logo"
              />
            </div>
            <div className="degreeText">
              <p className="lutzText anim-typewriter-lutz" id="degreeLutzText">
                IHK | Fachinformatiker - Anwendungsentwicklung | 2019 - 2021
              </p>
            </div>
          </div>
          
    </div>
    <div id='degreeLink'></div>
      </>
  );
}
import React from "react";
import '../../sass/style.scss';
import Cube from "../cube/Cube";

import { useRef, useState } from "react";
import { useEffect } from "react";

import { HashLink } from 'react-router-hash-link';

import { BrowserRouter as Router } from 'react-router-dom'

export default function Nav() {

  const [scroll, setScroll] = useState(0);
  const rootElement = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  

  // useEffect(() => {
  //   const getScroll = (e) => {
  //     setScroll(e.target.scrollTop);
  //   };
  //   const container = rootElement.current.container.current;
  //   container.addEventListener("scroll", getScroll);

  //   return () => {
  //     // if(currentTarget){
  //     //   observer.unobserve(currentTarget);
  //     // }
  //   };
  // }, []);

  return (
    <div className="orbit" id="orbit">
      <div className="center-image"><Cube /> </div>
     <Router>
      <ul className="ulNav">
      
      <li className="liNav">
        <div className="liNavCont">
        <HashLink to="#certificates" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
         <p>Certificates</p></HashLink></div> 
        </li>
       
        
        <li className="liNav">
        <div className="liNavCont">
          <HashLink to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
          <p>About me</p></HashLink>
          </div>
        </li>


        <li className="liNav">
        <div className="liNavCont">
          <HashLink to="#projects" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
          <p>Projects</p></HashLink>
          </div>
        </li>
        
        
        <li className="liNav">
        <div className="liNavCont">
          <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
          <p>Contact</p></HashLink>
          </div>
        </li>
        
        
        <li className="liNav">
        <div className="liNavCont">
          <HashLink to="#skills" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
          <p>Skills</p> </HashLink>
          </div>
        </li>
       
        
        <li className="liNav">
        <div className="liNavCont">
          <HashLink to="#degrees" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
          {/* <img src="" alt="" /> */}
          <p>Degrees</p></HashLink>
          </div>
        </li>
        
      </ul>
      </Router>
       
    </div>
  );
}

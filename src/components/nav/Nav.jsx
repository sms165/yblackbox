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

    <div className="navContainer">
      <div className="navigation">
    <div className="orbit" id="orbit">
      <div className="center-image"><Cube /> </div>
     <Router>
      <ul className="ulNav">
      
      <li className="liNav">
        <div >
        <HashLink to="#certificates" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> <div className="liNavCont">
          {/* <img src="" alt="" /> */}
         <p>Certificates</p></div></HashLink></div> 
        </li>
       
        
        <li className="liNav">
        <div >
          <HashLink to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
            <div className="liNavCont">
          {/* <img src="" alt="" /> */}
          <p>About me</p></div>
          </HashLink>
          </div>
        </li>


        <li className="liNav">
        <div >
          <HashLink to="#projects" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          <div className="liNavCont">
          {/* <img src="" alt="" /> */}
          <p>Projects</p></div></HashLink>
          </div>
        </li>
        
        
        <li className="liNav">
        <div >
          <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          <div className="liNavCont">
          {/* <img src="" alt="" /> */}
          <p>Contact</p>
          </div>
          </HashLink>
          </div>
        </li>
        
        
        <li className="liNav">
        <div >
          <HashLink to="#skills" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          <div className="liNavCont">
          {/* <img src="" alt="" /> */}
          <p>Skills</p> 
          </div></HashLink>
          </div>
        </li>
       
        
        <li className="liNav">
        <div >
          <HashLink to="#degrees" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
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

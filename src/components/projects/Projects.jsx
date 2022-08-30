import React from 'react'
import Deck from '../deck/Deck'

import '../../sass/style.scss';

import { useRef, useState } from "react";
import { useEffect } from "react";

export default function Projects() {

  const projectsSideNav = useRef();
  const projectsTitle = document.getElementById('projectsTitle');
const [projectsSideNavIntersecting, setProjectsSideNavIntersecting] = useState();
console.log('isIntersecting', projectsSideNavIntersecting)
useEffect(() => {

  // console.log('aboutSideNav', aboutSideNav.current);
  const observer = new IntersectionObserver((entries) =>{
    const entry =entries[0];
    setProjectsSideNavIntersecting(entry.isIntersecting)
    // console.log('entry', entry);
  }) 
  observer.observe(projectsSideNav.current);

  

  return () => {
  };
}, []);


if(projectsSideNavIntersecting == true){
  projectsTitle.classList.add("active");
  projectsTitle.classList.remove("reveal");
}
  
if(projectsSideNavIntersecting == false){

    if(projectsTitle.classList.contains("active") ){
  projectsTitle.classList.remove("active");
  projectsTitle.classList.add("reveal");
  }

}


  return (
   <>
   
    <Deck  />
    <div className='projectSideNav' ref={projectsSideNav}>
     </div><div  id="projects"></div></>
  )
}

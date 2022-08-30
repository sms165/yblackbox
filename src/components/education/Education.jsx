import React from 'react';
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

  // console.log('aboutSideNav', aboutSideNav.current);
  const observer = new IntersectionObserver((entries) =>{
    const entry =entries[0];
    setDegreesSideNavIntersecting(entry.isIntersecting)
    // console.log('entry', entry);
  }) 
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
   // console.log(uopeopleImg)
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
  <div >
   <div className="edu">
   

    <p ref={degreesSideNav} class="uopeopleText anim-typewriter" id='uopeopleText'>Bachelor | Computer Science | 2020 - 2023</p>
  
        <img id='uopeopleImg' className='hidden'  src={uopeople} alt="uopeople logo"  />
       
        <p className='degreeCfText anim-typewriter-cf' id='degreeCfText'>Bootcamp | Full-Stack Web Development | 2022</p>
        <img  id='cfImg' src={cf}  className='hidden'  alt="careerFoundry logo"  />


        <p className='degreeLutzText anim-typewriter-lutz' id='degreeLutzText'>IHK | Fachinformatiker - Anwendungsentwicklung | 2019 - 2021</p>
        {/* <p className='degreeLutzDesc'> Fachinformatiker - Anwendungsentwicklung</p>
        <p className='degreeLutzYear'>2019 - 2021</p> */}
        <img  id='lutzImg' src={lutz} className='hidden'  alt="lutz grub logo"  />
   </div>

<br/>
<br/>


{/* <div className="certBox">
   <div className="cert">
    <div className="adobe">
    <h3>Adobe</h3>
      <p>Adobe Certified Expert in Photoshop</p>
      <p>Adobe Certified Expert in InDesign</p>
      <p>Adobe Certified Expert in PremierePro</p>
</div>
<br/>
<div className="web">
      <h3>Web</h3>
      <p>SEO Search Engine Optimization</p>
      <p>CIW Certified Internet Web Associate</p>
      <p>CIW Certified Internet Web Professional</p>
      <p>Microsoft JavaScript Certificate</p>
      </div>
      <br/>
      <div className="proManag">
      <h3>Project Management</h3>
      <p>ITIL Foundation IT Service Management</p>
      <p>GPM Basis Certificate</p>
      </div>

   </div>
   </div> */}
   </div>
   
  )
}
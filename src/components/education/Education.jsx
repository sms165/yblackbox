import React from 'react';
import '../../sass/style.scss';

import { useEffect, useState, useRef } from 'react';


import uopeople from "../../assets/uopeople-text.svg";
import lutz from "../../assets/lutz.svg";
import cf from "../../assets/careerFoundry.svg";

import cert from "../../assets/cert.svg";

export default function Education() {
  

  const [isVisible, setIsVisible] = useState(false);

  

  

  

  return (
  <div >
   <div className="edu">
   

    <p class="uopeopleText anim-typewriter">Bachelor | Computer Science | 2020 - 2023</p>
    {/* <p className='degreeUopDesc'>Computer Science</p>
    <p className='degreeUopYear'>2020 - 2023 </p> */}
    

      <div className="uopeopleImg" id='uopeopleImg'>
        <img  src={uopeople} alt="uopeople logo"  />
        </div>
        <p className='degreeCfText anim-typewriter-cf'>Bootcamp | Full-Stack Web Development | 2022</p>
        {/* <p className='degreeCfDesc'>Full-Stack Web Development</p>
        <p className='degreeCfYear'>2022</p> */}
        <img className='cfImg' id='cfImg' src={cf} alt="careerFoundry logo"  />
        <p className='degreeLutzText anim-typewriter-lutz'>IHK | Fachinformatiker - Anwendungsentwicklung | 2019 - 2021</p>
        {/* <p className='degreeLutzDesc'> Fachinformatiker - Anwendungsentwicklung</p>
        <p className='degreeLutzYear'>2019 - 2021</p> */}
        <img className='lutzImg' id='lutzImg' src={lutz} alt="lutz grub logo"  />
   </div>

<br/>
<br/>


<div className="certBox">
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
   </div></div>
   
  )
}
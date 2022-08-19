import React from 'react';
import '../../sass/style.scss';

import { useEffect, useState, useRef } from 'react';


import cert from "../../assets/cert.svg";
import Certificates from '../certificate/Certificate';

export default function Education() {
  

  return (
  <div >
   

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
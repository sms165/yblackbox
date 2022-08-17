import React from 'react';
import '../../sass/style.scss';


import uopeople from "../../assets/uopeople-text.svg";
import lutz from "../../assets/lutz.svg";
import cf from "../../assets/careerFoundry.svg";

export default function Projects() {
  return (
   <div className="edu">
        <img className='uopeopleImg' src={uopeople} alt="uopeople logo"  />
        <img className='lutzImg' src={lutz} alt="lutz grub logo"  />
        <img className='cfImg' src={cf} alt="careerFoundry logo"  />
   </div>
  )
}
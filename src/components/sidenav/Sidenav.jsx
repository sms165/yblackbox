import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserHairLong,
  faThin
} from "@fortawesome/free-solid-svg-icons";
import "../../sass/style.scss";
import logo from "../../assets/logo2.svg";
import user from "../../assets/user.svg";
import code from "../../assets/code.svg";
import portfolio from "../../assets/portfolio.svg";
import education from "../../assets/education.svg";
import mail from "../../assets/mail.svg";
import {
  
  faUser,
  faCode,
  faLaptopCode,
  faLaptopFile
} from "@fortawesome/free-solid-svg-icons";


export default function Sidenav() {


  return (
    
      <div className="sideNavigation ">
        <img className="imgSideNave"  src={logo} alt="logo" />
     <img className="imgSmall" src={user} alt="user" />
     <img className="imgSmall"  src={portfolio} alt="portfolio" />
     <img className="imgSmall"  src={code} alt="skills" />
     <img className="imgSmall"  src={education} alt="education" />
     <img className="imgSmall"  src={mail} alt="mail" />
    
   
   
    </div>
  )
  }

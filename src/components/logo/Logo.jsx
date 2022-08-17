import React from 'react';
import '../../sass/style.scss';

import logo from "../../assets/y.svg";

export default function Logo() {
  return (
    <div className='logo'>
         <img className='logoImg' src={logo} alt="logo" />
    </div>
  )
}

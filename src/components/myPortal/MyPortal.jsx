import { useState } from "react";
import React from 'react';
import ReactDOM from "react-dom";

import MyFlixProject from "../myflixProject/myflixProject";





export default function MyPortal() {

    const portalRoot = document.getElementById('portal-root')
    return ReactDOM.createPortal(<p>hello</p>, portalRoot)
       
                
             
               
            
        }

// function MyPortal() {
//     const [isPortalOpen, setIsPortalOpen] = useState(false);
// const portalRoot = document.getElementById('portal-root')
//     return ReactDOM.createPortal(
       
//         <div id="portal_ProjectDetails">
//         <div>Project Details</div>
//         <div>HEY THERE THIS IS A TEST OF THE PORTAL SYSTEM</div>
//     </div>,
//     portalRoot
     
       
//     )
// }
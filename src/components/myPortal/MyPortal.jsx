
import React from 'react';
import ReactDOM from "react-dom";




export default function MyPortal() {

    const portalRoot = document.getElementById('portal-root')
    return ReactDOM.createPortal(<p>hello</p>, portalRoot)
       
                      
            
        }


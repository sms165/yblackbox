import React from 'react';
import { useEffect } from 'react';
import '../../sass/style.scss';

import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import cSvg from "../../assets/c.svg";
import javascriptSvg from "../../assets/javascript.svg";
import javaSvg from "../../assets/java.svg";
import phpSvg from "../../assets/php.svg";
import pythonSvg from "../../assets/python.svg";


function Skills() {

    useEffect(() => {
        console.log(document.getElementById('skillDetail'))
      return () => {
        
      }
    }, [])
    
    
    // console.log(document.getElementById('skillDetail'))

    // let detail= document.getElementById('skillDetail');
    //        detail.innerHTML='<p>Hello</p>';
    
    const info = () =>{
       
            let detail= document.getElementById('textDetail');
            detail.innerHTML='<div class="detail"><h1>C#</h1><img class="imageDetail" src="' + cSvg + '"  /></div>';        
        
    }
     
    const infoCss = () =>{
       
        let detail= document.getElementById('textDetail');
        detail.innerHTML='<div class="detail"><h1>CSS</h1><img class="imageDetail" src="' + cssSvg + '"  /></div>';        
    
}
const infoHtml = () =>{
       
    let detail= document.getElementById('textDetail');
    detail.innerHTML='<div class="detail"><h1>HTML</h1><img class="imageDetail" src="' + htmlSvg + '"  /></div>';        

}

const infoJava = () =>{
       
    let detail= document.getElementById('textDetail');
    detail.innerHTML='<div class="detail"><h1>Java</h1><img class="imageDetail" src="' + javaSvg + '"  /></div>';        

}
const infoJavascript = () =>{
       
    let detail= document.getElementById('textDetail');
    detail.innerHTML='<div class="detail"><h1>JavaScript</h1><img class="imageDetail" src="' + javascriptSvg + '"  /></div>';        

}
const infoPhp = () =>{
       
    let detail= document.getElementById('textDetail');
    detail.innerHTML='<div class="detail"><h1>PHP</h1><img class="imageDetail" src="' + phpSvg + '"  /></div>';        

}
const infoPython = () =>{
       
    let detail= document.getElementById('textDetail');
    detail.innerHTML='<div class="detail"><h1>Python</h1><img class="imageDetail" src="' + pythonSvg + '"  /></div>';        

}

  return (
    <>
    <div className="skills">
    <li>
       <h3 className='skillName csharp' onClick={info}>C#</h3><span className="bar"><span className="csharp" id='csharp'></span></span>
        </li>
         <li>
        <h3 className='skillName' onClick={infoCss}>CSS</h3><span className="bar"><span className="css" id="css"></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={infoHtml}>HTML</h3><span className="bar"><span className="html" id='html'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={infoJava}>Java</h3><span className="bar"><span className="java" id='java'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={infoJavascript}>JavaScript</h3><span className="bar"><span className="javascript" id='javascript'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={infoPhp}>PHP</h3><span className="bar"><span className="php" id='php'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={infoPython}>Python</h3><span className="bar"><span className="python" id='python'></span></span>
        </li>
    </div>
    <div className="skillDetail" id='skillDetail'>
        <div className="textDetail" id='textDetail'>
           <h1>Click on Programming Language to learn more !</h1> 
        </div>
        
    </div>
    </>
  )
}

export default Skills
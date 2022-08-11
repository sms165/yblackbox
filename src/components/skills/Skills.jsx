import React from 'react';
import { useEffect } from 'react';
import '../../sass/style.scss';

// programming languages
import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import cSvg from "../../assets/c.svg";
import javascriptSvg from "../../assets/javascript.svg";
import javaSvg from "../../assets/java.svg";
import phpSvg from "../../assets/php.svg";
import pythonSvg from "../../assets/python.svg";

// graphic design
import photoshopSvg from "../../assets/photoshop.svg";
import illustratorSvg from "../../assets/illustrator.svg";
import premiereProSvg from "../../assets/premierePro.svg";
import afterEffectsSvg from "../../assets/afterEffects.svg";
import indesignSvg from "../../assets/indesign.svg";

function Skills() {

    useEffect(() => {
        console.log(document.getElementById('skillDetail'))
      return () => {
        
      }
    }, [])
    

    
    const programmingSkills = (language) =>{
        let detail= document.getElementById('textDetail');
       switch (language) {
        case 'csharp':
            detail.innerHTML='<div class="detail"><h1>C#</h1><img class="imageDetail" src="' + cSvg + '"  /></div><div class="text"><br /><p>C# is an object oriented programming language which allows development of cross-platform application for Windows, Web and mobile development.</p><br /><p>I learned C# during my training at Lutz & Grub.</p><br /><p>IDE: VisualStudio</p></div>';   
            break;
        case 'css':
            detail.innerHTML='<div class="detail"><h1>CSS</h1><img class="imageDetail" src="' + cssSvg + '"  /></div><div class="text"><br /><p>CSS (Cascading Style Sheet) is a stylesheet language which defines how elements should be rendered.</p><br /><p>First experience was in High School, and continued learning.</p><br /><p>Libraries: fontAwesome</p><br /><p>Framework: bootstrap</p><br /><p>Preprocessors: SCSS<p><br /><p>IDE: VisualStudioCode, PHP storm, Dreamweaver</p></div>';   
            break;
        case 'html':
            detail.innerHTML='<div class="detail"><h1>HTML</h1><img class="imageDetail" src="' + htmlSvg + '"  /></div><div class="text"><br /><p>HTML (Hypertext Markup Languaged) is a markup language which defines the content and structure of the webpage.</p><br /><p>First experience was in High School, and continued learning.</p><br /><p>IDE: VisualStudioCode, PHP storm, Dreamweaver</p></div>';           
            break;
        case 'java':
            detail.innerHTML='<div class="detail"><h1>Java</h1><img class="imageDetail" src="' + javaSvg + '"  /></div><div class="text"><br /><p>Java is a object oriented programming language, which allows for cross-platform development.</p><br /><p>I learned Java during my education at University.</p><br /><p>IDE: Eclipse, XCode</p></div>';            
            break;
        case 'javascript':
            detail.innerHTML='<div class="detail"><h1>JavaScript</h1><img class="imageDetail" src="' + javascriptSvg + '"  /></div><div class="text"><br /><p>JavaScript is a object oriented programming language, best known as a scripting language for web development.</p><br /><p>I learned JavaScript through various opportunites and self learning.</p><br /><p>Libraries: jQuery, Chart.js, React, Parallax, React-Spring</p><br /><p>Frameworks: Angular,  React Native</p><br /><p>Etc.: Node.js, ESLint, Babel, Webpack, Parcel</p><br /><p>IDE: Visual Studio Code</p></div>';             
            break;
        case 'php':
            detail.innerHTML='<div class="detail"><h1>PHP</h1><img class="imageDetail" src="' + phpSvg + '"  /></div><div class="text"><br /><p>PHP (Hypertext Preprocessor) is a server side scripting language.</p><br /><p>I learned PHP through my internship at abas and self learning.</p><br /><p>Libraries: Symfony, Twig</p><br /><p>IDE: PHP Storm, Visual Studio Code</p></div>';     
            break;
        case 'python':
            detail.innerHTML='<div class="detail"><h1>Python</h1><img class="imageDetail" src="' + pythonSvg + '"  /></div><div class="text"><br /><p>Python is an object oriented programming language.</p><br /><p>I learned Python through my education at University.</p><br /><p>IDE: PHP Storm, Visual Studio Code</p></div>';      
            break;
        default:
            break;
       }
           
    }

    const graphicDesignSkills = (language) =>{
        let detail= document.getElementById('graphicDesignTextDetail');
       switch (language) {
        case 'afterEffects':
            detail.innerHTML='<div class="detail"><h1>After Effects</h1><img class="imageDetail" src="' + afterEffectsSvg + '"  /></div><div class="text"><br /><p>After Effect is a visual effects and motion graphics software for video.</p><br /><p>First experience was in High School.</p><p>Projects: Various projects in High School, animatons of svg images</div>';   
            break;
        case 'illustrator':
            detail.innerHTML='<div class="detail"><h1>Illustrator</h1><img class="imageDetail" src="' + illustratorSvg + '"  /></div><div class="text"><br /><p>Illustrator is a vector-based graphics software.</p><br /><p>First experience was in High School, and continued learning.</p><br /><p>Projects: Logos, Svgs,Vecctor Illustrations></p></div>';   
            break;
        case 'indesign':
            detail.innerHTML='<div class="detail"><h1>InDesign</h1><img class="imageDetail" src="' + indesignSvg + '"  /></div><div class="text"><br /><p>InDesign is a layout and page design software for print and digital media.</p><br /><p>First experience was in High School, and continued learning.</p><br /><p>Projects: Restaurant Menu, Movie Poster, CD design, Business Card, Calendar, Playing Cards</p></div>';           
            break;
        case 'photoshop':
            detail.innerHTML='<div class="detail"><h1>Photoshop</h1><img class="imageDetail" src="' + photoshopSvg + '"  /></div><div class="text"><br /><p>Photoshop is a graphic editor program.</p><br /><p>First experience was in High School, and continued learning.</p><br /><p>Projects: Photo editing, </p></div>';            
            break;
        case 'premierePro':
            detail.innerHTML='<div class="detail"><h1>Premiere Pro</h1><img class="imageDetail" src="' + premiereProSvg + '"  /></div><div class="text"><br /><p>Premiere Pro is a video editing software.</p><br /><p>First experience was in High School.</p><br /><p>Projects: Various videos in high school</p></div>';             
            break;
        default:
            break;
       }
           
    }

    
     
    

  return (
    <><h2 className='skillsHeader'>Programming Skills</h2>
    <div className='skillsProgramming' >
        
    <div className="skills">
    <li>
       <h3 className='skillName csharp' onClick={() => programmingSkills('csharp')}>C#</h3><span className="bar"><span className="csharp" id='csharp'></span></span>
        </li>
         <li>
        <h3 className='skillName' onClick={() => programmingSkills('css')}>CSS</h3><span className="bar"><span className="css" id="css"></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => programmingSkills('html')}>HTML</h3><span className="bar"><span className="html" id='html'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => programmingSkills('java')}>Java</h3><span className="bar"><span className="java" id='java'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => programmingSkills('javascript')}>JavaScript</h3><span className="bar"><span className="javascript" id='javascript'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => programmingSkills('php')}>PHP</h3><span className="bar"><span className="php" id='php'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => programmingSkills('python')}>Python</h3><span className="bar"><span className="python" id='python'></span></span>
        </li>
    </div>
    <div className="skillDetail" id='skillDetail'>
        <div className="textDetail" id='textDetail'>
           <h1>Click on a Programming Language to learn more !</h1> 
        </div>
        
    </div>
    </div>
    <br />
    <br />
    <br />
    <h2 className='skillsHeader'>Graphic Design Skills</h2>
     <div className="skillsGraphic">
        <div className="skills">
    <li>
       <h3 className='skillName' onClick={() => graphicDesignSkills('afterEffects')}>AfterEffects</h3><span className="bar"><span className="afterEffects" id='afterEffects'></span></span>
        </li>
         <li>
        <h3 className='skillName' onClick={() => graphicDesignSkills('illustrator')}>Illustrator</h3><span className="bar"><span className="illustrator" id="illustrator"></span></span>
        </li>
        <li>     
        <h3 className='skillName' onClick={() => graphicDesignSkills('indesign')}>InDesign</h3><span className="bar"><span className="indesign" id='indesign'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => graphicDesignSkills('photoshop')}>Photoshop</h3><span className="bar"><span className="photoshop" id='photoshop'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => graphicDesignSkills('premierePro')}>PremierePro</h3><span className="bar"><span className="premierePro" id='premierePro'></span></span>
        </li>
    </div>
    <div className="skillDetail" id='skillDetail'>
        <div className="graphicDesignTextDetail" id='graphicDesignTextDetail'>
           <h1>Click on a Software name to learn more !</h1> 
        </div>
        </div>
    </div>

    <br />
    <br />
    <br />
    <h2 className='skillsHeader'>Other Computer Skills</h2>
     <div className="skillsEtc">
        <div className="skills">
    <li>
       <h3 className='skillName' onClick={() => etcSkills('phpMyAdmin')}>PHP MyAdmin</h3><span className="bar"><span className="phpMyAdmin" id='phpMyAdmin'></span></span>
        </li>
         <li>
        <h3 className='skillName' onClick={() => etcSkills('mongodb')}>MongoDB</h3><span className="bar"><span className="mongodb" id="mongodb"></span></span>
        </li>
        <li>     
        <h3 className='skillName' onClick={() => etcSkills('microsoft')}>Microsoft Office</h3><span className="bar"><span className="microsoft" id='microsoft'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => etcSkills('docker')}>Docker</h3><span className="bar"><span className="photoshop" id='photoshop'></span></span>
        </li>
        <li>
        <h3 className='skillName' onClick={() => etcSkills('git')}>Git</h3><span className="bar"><span className="git" id='git'></span></span>
        </li>
    </div>
    <div className="skillDetail" id='skillDetail'>
        <div className="etcTextDetail" id='etcTextDetail'>
           <h1>Click on name to learn more !</h1> 
        </div>
        </div>
    </div>
    </>
  )
}

export default Skills
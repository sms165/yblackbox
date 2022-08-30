import ReactDOM from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import Test from "./components/test/Test";
import Nav from "./components/nav/Nav";
import Cube from "./components/cube/Cube";
import Background from "./components/background/Background";
import Sidenav from "./components/sidenav/Sidenav";
import About from "./components/about/About";
import "./sass/style.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bg from "./assets/bg.jpg";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Deck from "./components/deck/Deck";
import Projects from "./components/projects/Projects";

import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Certificate from "./components/certificate/Certificate";
import CertificateText from "./components/certificateText/CertificateText";


const App = () => {
  const [scroll, setScroll] = useState(0);
  const parallax = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // const aboutSideNav = useRef();


  useEffect(() => {

    const getScroll = (e) => {
      setScroll(e.target.scrollTop);
    };
    const container = parallax.current.container.current;
    container.addEventListener("scroll", getScroll);

    // console.log('aboutSideNav', aboutSideNav.current)
    

    return () => {
      // if(currentTarget){
      //   observer.unobserve(currentTarget);
      // }
    };
  }, []);
  // navbar visible starting at page 2
  if (scroll > 2) {
    //console.log(document.getElementById("iconsNav"));
    const nav = document.getElementById("blackbox");
    nav.classList.add("active");
    nav.classList.remove("reveal");
    // {console.log({scroll})}
  } 
  

  // const height = document.documentElement.clientHeight;
  

  // const aboutMe = document.getElementById('aboutMe');
  // const projectsTitle = document.getElementById('projectsTitle');
  // const skillsTitle = document.getElementById('skillsTitle');
  // const degreesTitle = document.getElementById('degreesTitle');
  // const certificatesTitle = document.getElementById('certificatesTitle');
  // const contactTitle = document.getElementById('contactTitle');
  // console.log( document.body.height)


   

  return (
    <>
     
      <Parallax ref={parallax} pages={8} style={{ top: "0", left: "0" }}>
        
        {/* background */}
        <ParallaxLayer offset={0} speed={0.1} factor={10}>
          // {/* <div className="backg"> */}
          <Background />
          // {/* </div> */}
        </ParallaxLayer>

        {/* side navigation */}
        <ParallaxLayer
          className="sideNavLayer"
          style={{ width: "15vw", float:"left"}}
          // style={props}
          sticky={{ start: 0, end: 8 }}
        >
          <div className="sideNav " id="iconsNav">
            <Sidenav />
          </div>
        </ParallaxLayer>

        {/* top cube animation / navigation */}
        <ParallaxLayer
          // offset={0}
          speed={1}
          
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zindex: "1",
          }}
        >
          {/* <div className="topMenu"> */}
          <div className="clouds"></div>
          <div className="nav-comp">
            <Nav />
          </div>
          {/* </div> */}
        </ParallaxLayer>

        {/* about page */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ width: "70vw", float: "right" , position: "relative"}}
          // sticky={{start:2, end:2}}
          
        >
          <div  className="aboutComp">
            {/* <p>I've scrolled {scroll} pixels</p> */}
            <About />
            {/* <Link to="/meetAppProj"   ><div>Meet App Project</div></Link> */}
            
          </div>
        </ParallaxLayer>

      
        {/* projects page */}
        <ParallaxLayer
          offset={1.5}
          // style={{ top:"20vh" }}
          speed={1}
        >
           
          {/* <Sidenav style={{float:'left'}} /> */}
            
          <div className="deckComp"  >
            <div >  
            <Projects />
            </div>
          </div>
        </ParallaxLayer>


       

        <p id="degrees">  </p>
        <ParallaxLayer
          offset={3}
          // style={{ width: "50vw", float: "right" }}
          // speed={1}
        >
          
          {/* <p>I've scrolled {scroll} pixels</p> */}
          <div className="educationComp" >
            <Education />
          </div>
        </ParallaxLayer>
        

        <p id="certificates">  </p>
        <ParallaxLayer
          offset={3.5}
          // style={{ width: "50vw", float: "right" }}
          speed={1}
        >
         
         
            {/* <Certificate /> */}
         <div className="certificationComp" >
          <Certificate /></div>
          <div className="certificationTextComp" > 
         <CertificateText  /> 
          </div>
        </ParallaxLayer>

        <p id="skills"></p>
        <ParallaxLayer
          offset={4.5}
          // style={{ width: "50vw", float: "right" }}
          speed={.5}
        >
          {/* <div id="skills"></div> */}
          
          <div className="skillsComp" id="skillsNav" >
         
            <Skills />
          </div>
        </ParallaxLayer>

        
       
        
        <p id="contact">  </p>
        <ParallaxLayer id="contact"
          offset={6.5}
          // style={{ width: "70vw", float: "right" , position: "relative"}}
          // style={{ width: "50vw", float: "right" }}
          speed={0.1}
        >
          
          <div className="contactComp" >  
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
      
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//const root = ReactDOM.createRoot(do?cument.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));

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
    
    const nav = document.getElementById("blackbox");
    nav.classList.add("active");
    nav.classList.remove("reveal");
   
  } 



   

  return (
    <>
     
      <Parallax ref={parallax} pages={8} style={{ top: "0", left: "0" }}>
        
        {/* background */}
        <ParallaxLayer offset={0}  factor={12}>
          // {/* <div className="backg"> */}
          <Background />
          // {/* </div> */}
        </ParallaxLayer>

       {/* clouds for top nav background */}
        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zindex: "1",
            
          }}
          offset={0}
        >
          <div className="clouds"></div>
      
        </ParallaxLayer>

         {/* side logo */}
         <ParallaxLayer
          className="sideNavLayer"
          style={{ width: "10vw", float:"left"}}
          sticky={{ start: 0, end: 8 }}
        >
          {/* <div className="sideNav " id="iconsNav"> */}
            <Sidenav />
          {/* </div> */}
        </ParallaxLayer>

        <ParallaxLayer
        className="content"
        speed={0.5}
        // style={{  width: "90vw", float:"right"}}
        
        >
             <Nav />
             <About />
             <Projects />
             <Skills />
             <CertificateText />
             <Education />
             <Contact />


        </ParallaxLayer>


        {/* top cube animation / navigation, content */}
        
          {/* <div className="topMenu"> */}
          
          {/* <div className="nav-comp"> */}
            {/* <Nav /> */}
          {/* </div> */}


          {/* <div  className="aboutComp"> */}
            {/* <p>I've scrolled {scroll} pixels</p> */}
            {/* <About /> */}
            {/* <Link to="/meetAppProj"   ><div>Meet App Project</div></Link> */}
            
          {/* </div> */}

          {/* <div className="deckComp"  > */}
            {/* <div >   */}
            {/* <Projects /> */}
            {/* </div>
          </div> */}


          {/* <div className="educationComp" > */}
            {/* <Education /> */}
          {/* </div> */}

          {/* <div className="certificationTextComp" >  */}
         {/* <div className="certificationComp" > */}
         
          {/* <CertificateText  /> */}
          {/* </div> */}


          {/* <div className="skillsComp" id="skillsNav" > */}
         
         {/* <Skills /> */}
       {/* </div> */}

       {/* <p id="contact">  </p>
          <div className="contactComp" >   */}
            {/* <Contact /> */}
          {/* </div> */}
          
      

        {/* about page */}
        {/* <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ width: "70vw", float: "right" , position: "relative"}}
          // sticky={{start:2, end:2}}
          
        >
          <div  className="aboutComp">
            {/* <p>I've scrolled {scroll} pixels</p> */}
            {/* <About /> */}
            {/* <Link to="/meetAppProj"   ><div>Meet App Project</div></Link> */}
            
          {/* </div>
        </ParallaxLayer> */} 

      
        {/* projects page */}
        {/* <ParallaxLayer
          offset={2}
          // style={{ top:"20vh" }}
          speed={.5}
          style={{ width: "70vw", float: "right"}}
        >
           
          {/* <Sidenav style={{float:'left'}} /> */}
            
          {/* <div className="deckComp"  >
            <div >  
            <Projects />
            </div>
          </div>
        </ParallaxLayer> */} 


       

        {/* <p id="degrees">  </p>
        <ParallaxLayer
          offset={3}
          speed={.2}
          // style={{ width: "50vw", float: "right" }}
          // speed={1}
        > */}
          
          {/* <p>I've scrolled {scroll} pixels</p> */}
          {/* <div className="educationComp" >
            <Education />
          </div>
        </ParallaxLayer>
        

        <p id="certificates">  </p>
        <ParallaxLayer
          offset={4}
          // style={{ width: "50vw", float: "right" }}
          speed={.5}
        >
          */}
         
            {/* <Certificate /><div className="certificationTextComp" >  */}
         {/* <div className="certificationComp" > */}
         
          {/* <CertificateText  /></div> */}
          
          
          {/* </div> */}
        {/* </ParallaxLayer> */}

        {/* <p id="skills"></p>
        <ParallaxLayer
          offset={5}
          // style={{ width: "50vw", float: "right" }}
          speed={.5}
          factor={2}
        > */}
          {/* <div id="skills"></div> */}
          
          {/* <div className="skillsComp" id="skillsNav" >
         
            <Skills />
          </div>
        </ParallaxLayer> */}

        
       
        
        
        {/* <ParallaxLayer id="contact"
          offset={7}
          speed={1}
          // style={{ width: "70vw", float: "right" , position: "relative"}}
          // style={{ width: "50vw", float: "right" }}
          // speed={.5}
        >
          <p id="contact">  </p>
          <div className="contactComp" >  
            <Contact />
          </div>
        </ParallaxLayer> */}
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

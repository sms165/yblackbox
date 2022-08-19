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
import Logo from "./components/logo/Logo";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Certificate from "./components/certificate/Certificate";

const App = () => {
  const [scroll, setScroll] = useState(0);
  const parallax = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  

  useEffect(() => {
    const getScroll = (e) => {
      setScroll(e.target.scrollTop);
    };
    const container = parallax.current.container.current;
    container.addEventListener("scroll", getScroll);

    return () => {
      // if(currentTarget){
      //   observer.unobserve(currentTarget);
      // }
    };
  }, []);
  // navbar visible starting at page 2
  if (scroll > 320) {
    //console.log(document.getElementById("iconsNav"));
    const nav = document.getElementById("iconsNav");
    nav.classList.add("active");
    nav.classList.remove("reveal");
  } else if (scroll < 320 && scroll > 50) {
    //console.log(document.getElementById("iconsNav"));
    const nav = document.getElementById("iconsNav");
    nav.classList.remove("active");
    nav.classList.add("reveal");
  } 
  
  if(scroll > 1202){
     // programming skills
     let html = document.getElementById("html");
     let csharp = document.getElementById("csharp");
     let css = document.getElementById("css");
     let php = document.getElementById("php");
     let java = document.getElementById("java");
     let javascript = document.getElementById("javascript");
     let python = document.getElementById("python");
     console.log(html);
     html.classList.add("visible");
     csharp.classList.add("visible");
     css.classList.add("visible");
     php.classList.add("visible");
     java.classList.add("visible");
     javascript.classList.add("visible");
     python.classList.add("visible");
 
     // graphic design skills
     let afterEffects = document.getElementById("afterEffects");
     let premierePro = document.getElementById("premierePro");
     let illustrator = document.getElementById("illustrator");
     let indesign = document.getElementById("indesign");
     let photoshop = document.getElementById("photoshop");
     console.log(afterEffects);
     afterEffects.classList.add("visible");
     premierePro.classList.add("visible");
     illustrator.classList.add("visible");
     indesign.classList.add("visible");
     photoshop.classList.add("visible");
 
     // etc skills
     let docker = document.getElementById("docker");
     let git = document.getElementById("git");
     let microsoft = document.getElementById("microsoft");
     let mongodb = document.getElementById("mongodb");
     let phpMyAdmin = document.getElementById("phpMyAdmin");
     docker.classList.add("visible");
     git.classList.add("visible");
     microsoft.classList.add("visible");
     mongodb.classList.add("visible");
     phpMyAdmin.classList.add("visible");
  }

  if(scroll>1650){
    let uopeopleImg = document.getElementById("uopeopleImg");
    let lutzImg = document.getElementById("lutzImg");
    let cfImg = document.getElementById("cfImg");
    console.log(uopeopleImg)
    uopeopleImg.classList.add("visible");
    lutzImg.classList.add("visible");
    cfImg.classList.add("visible");
  }

  if (scroll > 2500) {
    let maskC = document.getElementById("mask-c");
    let maske = document.getElementById("mask-e");
    let maskr = document.getElementById("mask-r");
    let maskt = document.getElementById("mask-t");
    let maski = document.getElementById("mask-i");
    let maskf = document.getElementById("mask-f");
    let maskit = document.getElementById("mask-it");
    let maskct = document.getElementById("mask-ct");
    let maska = document.getElementById("mask-a");
    let masktt = document.getElementById("mask-tt");
    let masket = document.getElementById("mask-et");
    let masks = document.getElementById("mask-s");

    maskC.classList.add("visible");
    maske.classList.add("visible");
    maskr.classList.add("visible");
    maskt.classList.add("visible");
    maski.classList.add("visible");
    maskf.classList.add("visible");
    maskit.classList.add("visible");
    maskct.classList.add("visible");
    maska.classList.add("visible");
    masktt.classList.add("visible");
    masket.classList.add("visible");
    masks.classList.add("visible");
  }
  return (
    <>
      <Parallax ref={parallax} pages={6} style={{ top: "0", left: "0" }}>
        {/* background */}
        <ParallaxLayer offset={0} speed={0} factor={10}>
          // {/* <div className="backg"> */}
          <Background />
          // {/* </div> */}
        </ParallaxLayer>

        {/* side navigation */}
        <ParallaxLayer
          className="sideNavLayer"
          style={{ width: "10vw" }}
          // style={props}
          sticky={{ start: 0, end: 5 }}
          // offset={2}
          // speed={-1}
          factor={10}
        >
          <div className="sideNav reveal" id="iconsNav">
            <Sidenav />
          </div>
        </ParallaxLayer>

        {/* yblackbox logo  */}
        <ParallaxLayer
          className="yblackbox"
          sticky={{ start: 0, end: 5 }}
          style={{ width: "10vw", float: "left" }}
        >
          <div className="logoComp">
            <Logo />
          </div>
        </ParallaxLayer>

        {/* top cube animation / navigation */}
        <ParallaxLayer
          // offset={0}
          speed={1}
          // sticky={{start:0, end:0}}
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
          className="layerOne"
          offset={1}
          speed={0.5}
          // sticky={{start:2, end:2}}
          style={{}}
        >
          <div className="aboutComp">
            {/* <p>I've scrolled {scroll} pixels</p> */}
            <About />
          </div>
        </ParallaxLayer>

        {/* projects page */}
        <ParallaxLayer
          offset={1}
          style={{ width: "70vw", float: "right" }}
          speed={1}
        >
          {/* <Sidenav style={{float:'left'}} /> */}
          <div className="deckComp">
            <Projects />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          // style={{ width: "50vw", float: "right" }}
          speed={1.5}
        >
          {/* <p>I've scrolled {scroll} pixels</p> */}
          <div className="skillsComp" >
          
            <Skills />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          // style={{ width: "50vw", float: "right" }}
          speed={0.2}
        >
          {/* <p>I've scrolled {scroll} pixels</p> */}
          <div className="educationComp" >
            <Education />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          // style={{ width: "50vw", float: "right" }}
          speed={0.2}
        >
         
          <div className="certificationComp" >
            <Certificate />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          // style={{ width: "50vw", float: "right" }}
          speed={1}
        >
          {/* <p>I've scrolled {scroll} pixels</p> */}
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

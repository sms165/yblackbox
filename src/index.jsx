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

const App = () => {
  const [scroll, setScroll] = useState(0);
  const parallax = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const skillsRef =useRef(null);

      // console.log(document.getElementById('body'))
    // const target= document.getElementById('skillsComp');
    const options={
      root:null,
      rootMargin: '0px',
      threshold: 1
     };
//  console.log(target);
  const observer = new IntersectionObserver(function(entries,observer){
    const entry = entries[0];
    // programming skills
    let html = document.getElementById('html');
    let csharp = document.getElementById('csharp');
    let css = document.getElementById('css');
    let php = document.getElementById('php');
    let java = document.getElementById('java');
    let javascript = document.getElementById('javascript');
    let python = document.getElementById('python');
    console.log(html)
     html.classList.add('visible');
     csharp.classList.add('visible');
     css.classList.add('visible');
     php.classList.add('visible');
     java.classList.add('visible');
     javascript.classList.add('visible');
     python.classList.add('visible');
     
     // graphic design skills
    let afterEffects = document.getElementById('afterEffects');
    let premierePro = document.getElementById('premierePro');
    let illustrator = document.getElementById('illustrator');
    let indesign = document.getElementById('indesign');
    let photoshop = document.getElementById('photoshop');
    console.log(afterEffects)
    afterEffects.classList.add('visible');
    premierePro.classList.add('visible');
    illustrator.classList.add('visible');
    indesign.classList.add('visible');
    photoshop.classList.add('visible');


  },options);

  const currentTarget = skillsRef.current;

  if(currentTarget){
     observer.observe(currentTarget)
  }
  

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
  return (
    <>
      <Parallax ref={parallax} pages={5} style={{ top: "0", left: "0" }}>

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
        <ParallaxLayer className="yblackbox"
        sticky={{start:1, end:5}}
        style={{ width: "10vw", float: "left", height:"10vh" }}
        >
          <Logo />
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
          speed={.5}
          // sticky={{start:2, end:2}}
          style={{}}
        >
          <div className="aboutComp">
            <p>I've scrolled {scroll} pixels</p>
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
          <div className="skillsComp"  ref={skillsRef}>
           <Skills />
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

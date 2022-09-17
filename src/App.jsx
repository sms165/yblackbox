import React from "react";

import Nav from "./components/nav/Nav";

import Background from "./components/background/Background";
import Sidenav from "./components/sidenav/Sidenav";
import About from "./components/about/About";
import "./sass/style.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useRef, useState } from "react";
import { useEffect } from "react";

import Projects from "./components/projects/Projects";

import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

import CertificateText from "./components/certificateText/CertificateText";

import Game from "./components/game/Game";

export default function App() {
  const [scroll, setScroll] = useState(0);
  const parallax = useRef(null);

  useEffect(() => {
    const getScroll = (e) => {
      setScroll(e.target.scrollTop);
    };
    const container = parallax.current.container.current;
    container.addEventListener("scroll", getScroll);

    return () => {};
  }, []);

  // navbar visible starting at page 2
  if (scroll > 2) {
    const nav = document.getElementById("blackbox");
    nav.classList.add("active");
    nav.classList.remove("reveal");
  }

  return (
    <>
      <Parallax ref={parallax} pages={9} style={{ top: "0", left: "0" }}>
        {/* background */}
        <ParallaxLayer offset={0} factor={20} speed={0.5}>
          <Background />
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
          style={{ width: "10vw", float: "left" }}
          sticky={{ start: 0, end: 8 }}
        >
          {/* <div className="sideNav " id="iconsNav"> */}
          <Sidenav />
          {/* </div> */}
        </ParallaxLayer>

        <ParallaxLayer
          className="content"

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

        <ParallaxLayer className="game" offset={8}>
          <div className="gameStyle">
            <Game rows={20} columns={10} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

import  ReactDOM  from "react-dom";
import React from 'react';
import { createRoot } from "react-dom/client";
import Test from "./Test";
import Nav from "./components/nav/Nav";
import Cube from "./components/cube/Cube";
import Background from "./components/background/Background";
import Sidenav from "./components/sidenav/Sidenav";
import About from "./components/about/About"
import './sass/style.scss'
import { Parallax, ParallaxLayer  } from "@react-spring/parallax";
import bg from './assets/bg.jpg';
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";


const App = () =>{
  const [scroll, setScroll] = useState(0)
const parallax = useRef(null)

useEffect(() => {
  const getScroll = (e) => {
    setScroll(e.target.scrollTop)
    // if (e > 500) {
    //   const nav= document.getElementById("sideNav").classList.toggle('active');
      
       
    //  }else{
    //    console.log(scroll)
    //  }
  }
  const container = parallax.current.container.current
  container.addEventListener('scroll', getScroll)
  

  return () => {
   
  }
}, [])
 if (scroll > 700) {
   console.log(document.getElementById("iconsNav"));
      const nav= document.getElementById("iconsNav");
      nav.classList.add("active");
      nav.classList.remove("reveal");
       
     }else if(scroll < 700 && scroll >50) {
      console.log(document.getElementById("iconsNav"));
      const nav= document.getElementById("iconsNav");
      nav.classList.remove("active");
      nav.classList.add("reveal");
     }
    return (<>
    {/* <div className="sideNav reveal active " id="sideNav">
         <Sidenav />
         </div>  */}
    
   
         <div className="backg">
  <Background  style={{ postion:'fixed'}} />
  </div>
<Parallax ref={parallax} pages={3} style={{ top: '0', left: '0' }}>

  <ParallaxLayer 
    offset={0}
    
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="topMenu">
    <div className="clouds"></div>
       <div className="nav-comp">
        <Nav />
        </div></div>
  </ParallaxLayer>
  <ParallaxLayer className="layerOne"
    offset={1}
    
    style={{  }}>
      <div className="aboutComp">
      <p>I've scrolled {scroll} pixels</p>
    <About />
    </div>
  </ParallaxLayer>
  <ParallaxLayer
  // style={props}
sticky={{start:1}}
   
    >
     
      <div className="sideNav reveal" id="iconsNav">
         <Sidenav />
         </div> 
    
  </ParallaxLayer>

</Parallax>



{/* <div className="backg">
  <Background  />
  </div>  */}

 {/* <Parallax pages={3} style={{ }}>

  <ParallaxLayer offset={1}
    
    style={{ }}>
  <div className="aboutComp">
    <About />
    </div>
  </ParallaxLayer>
  <ParallaxLayer offset={1}>
 1
  </ParallaxLayer>
  <ParallaxLayer>
2
  </ParallaxLayer>
  

</Parallax> */}

       {/* <Cube /> */}

      </>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//const root = ReactDOM.createRoot(do?cument.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
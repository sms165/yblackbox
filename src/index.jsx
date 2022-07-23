import  ReactDOM  from "react-dom";
import React from 'react';
import { createRoot } from "react-dom/client";
import Test from "./components/test/Test";
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
import Deck from "./components/deck/Deck";


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
<Parallax ref={parallax} pages={5} style={{ top: '0', left: '0' }}>

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
    {/* <Test /> */}
  </ParallaxLayer>
  <ParallaxLayer 
    offset={2}
    
    >
     
      <div className="deckComp">
    <Deck  />
    </div>
      
      {/* <Test /> */}
      {/* <div className="deckComp">
    <Deck  />
    </div> */}
  </ParallaxLayer>
  <ParallaxLayer
  // style={props}
sticky={{start:1, end:5}}
   
    >
     
      <div className="sideNav reveal" id="iconsNav">
         <Sidenav />
         </div> 
    
  </ParallaxLayer>
  <ParallaxLayer offset={3}>
  {/* <animated.div className="deckComp">
    <Deck  />
    </animated.div> */}
  
  </ParallaxLayer>
 
    <div className="deckComp">
    <Deck  />
    </div>

 
</Parallax>




 {/* <Parallax pages={2} style={{ }}>
 <div className="deckComp">
    <Deck  />
    </div>
  
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
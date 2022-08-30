import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, HashLink } from 'react-router-dom';
import '../../sass/style.scss';
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Switch } from 'react-router-dom';

import Nav from '../nav/Nav';

export default function About() {

  const [scroll, setScroll] = useState(0);
  
  const aboutSideNav = useRef();
  const aboutMe = document.getElementById('aboutMe');
  const [aboutSideNavIntersecting, setAboutSideNavIntersecting] = useState();
  // console.log('isIntersecting', aboutSideNavIntersecting)
  useEffect(() => {

    // console.log('aboutSideNav', aboutSideNav.current);
    const observer = new IntersectionObserver((entries) =>{
      const entry =entries[0];
      setAboutSideNavIntersecting(entry.isIntersecting)
      // console.log('entry', entry);
    }) 
    observer.observe(aboutSideNav.current);

    

    return () => {
    };
  }, []);


  if(aboutSideNavIntersecting == true){
    aboutMe.classList.add("active");
    aboutMe.classList.remove("reveal");
    console.log('aboutSideNav', aboutSideNav.current);
  }
  
  if (aboutSideNavIntersecting == false ) {
    if(aboutMe.classList.contains("active")){
    aboutMe.classList.remove("active");
    aboutMe.classList.add("reveal");
    }
  }


  return (
    
    <div ref={aboutSideNav} className='about' id='about'>
      
      {/* <Router> */}
    {/* <Routes>
      
      <Route path="/meetAppProj" element={<MeetAppProj />} />
       </Routes> */}
      <a id='about'></a>
        <p>Hello, my name is Stephanie Schlachter and I live in Germany. I am a full-stack developer in search for new and exiting opportunities.</p>
        <br/>
        <p>Welcome to my page</p>
        {/* <Link to="/meetAppProj"   ><div>Meet App Project</div></Link> */}
        {/* <Link to="/meet" target="_blank" >meet</Link>

        <Routes>
          <Route path="/meet" element={<MyFlixProject />} />
         
        </Routes>
    </Router> */}
        </div>
  )
}

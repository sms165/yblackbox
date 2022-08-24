import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, HashLink } from 'react-router-dom';
import '../../sass/style.scss';
import { Switch } from 'react-router-dom';
import MyFlixProject from '../myflixProject/myflixProject';
import MeetAppProj from '../meetAppProj/MeetAppProj'
import Nav from '../nav/Nav';

export default function About() {
  
  return (
    
    <div className='about' id='about'>
      
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

import React from "react";
import { animated, to  } from "react-spring";
import Carousel from "nuka-carousel";


import '../../sass/style.scss';
import MeetAppProj from "../meetAppProj/MeetAppProj";
import MyFlixProject from "../myflixProject/myflixProject";
import MyWindowPortal from "../myWindowPortal/MyWindowPortal";
import MyPortal from "../myPortal/MyPortal"
import Modal from "../modal/Modal"
import { useRef, useState } from "react";
import { useEffect } from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.projectsSideNav = React.createRef();
    this.state = {
      counter: 0,
      showWindowPortal: false,
      projectsSideNavIntersecting: false,
    };
    
    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    this.closeWindowPortal = this.closeWindowPortal.bind(this);
  }

  
  




  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      this.closeWindowPortal();
    });

    // const observer = new IntersectionObserver((entries) =>{
    //   const entry =entries[0];

    //  this.setState({projectsSideNavIntersecting: (entry.isIntersecting)})
    //  console.log('isIntersectingPoj', this.projectsSideNavIntersecting.current) 
    //  //  console.log('entry', entry);
    // }) 
    // observer.observe(this.projectsSideNav.current);
  }
  //   window.setInterval(() => {
  //     this.setState(state => ({
  //       counter: state.counter + 1,
  //     }));
  //   }, 1000);
  
  
  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal,
    }));
  }
  
  closeWindowPortal() {
    this.setState({ showWindowPortal: false })
  }
  

  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics, keywords } = objs[i];

    // open = () =>{
    //   window.open('../myflixProject/myflixProject.jsx')
    // }
    //  const projectsTitle = document.getElementById('projectsTitle');

    // if(this.projectsSideNavIntersecting == true){
    //   projectsTitle.classList.add("active");
    //   projectsTitle.classList.remove("reveal");
    // }else if (this.projectsSideNavIntersecting == false || screenTop>2) {
    //   projectsTitle.classList.remove("active");
    //   projectsTitle.classList.add("reveal");
    // }
  

    return (
        <div  className="ex" >
      <animated.div
        key={i}
        style={{
          transform: to(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: to([rot, scale], trans)
          }}
        >
          <div className="card" >
            <Carousel >
              {pics.map(pic => (
                <img className="imgCard" src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name}</h2>
            
            <div className="keywordsContainer" >
            {keywords.map(word =>(
              <h5 className="keyword">{word}</h5>
            ))}
            
            </div>
            <div>
           {/* <a
   target="_blank"
   rel="noreferrer"
   href='https://www.kindacode.com'>  */}
  
{/* </a> */}
 {/* <button className="cardBtn" onClick={this.toggleWindowPortal}>
           More Details
        </button> */}
        {/* {this.state.showWindowPortal && (
          <MyWindowPortal >
            
         
          <MyFlixProject />
           
         </MyWindowPortal>
        
      )} */}
        <a href="https://github.com/sms165" target="_blank"><button className="cardBtn">More Details</button></a>
            </div>
            
          </div>
          
        </animated.div>
      </animated.div>
      </div>
    );
  }
}

export default Card;

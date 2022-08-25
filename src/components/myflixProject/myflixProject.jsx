import React from "react";
// import styles from "./myflixProject.css";

import logo from "./assets/logo-white-small.svg";
import screens from "./assets/screens.jpg";
import userFlow from "./assets/userFlow.jpg";
import wireframes from "./assets/wireframeMyFlix.svg";
import movieImg from "./assets/dorisday.jpg";
import theater from "./assets/movie-theater.jpg";


import { HashLink } from 'react-router-hash-link';

import { BrowserRouter as Router } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRegular,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function MyFlixProject() {

	const rectangleHeader={
		height: '20vh',
		width: '100vw',
		backgroundColor: '#0D1A25',
		display:'flex',
		justifyContent: 'right',
		flexWrap: 'wrap',
		alignContent: 'space-around',

	}
	const logoImg ={
		height:'20vh',
		zIndex: '1000',
		position: 'absolute',
		paddingLeft: '5vw',
		top: '10vh'
	}

	const screensImg ={
		height:'90vh',
		paddingRight: '20vw',
		// position: 'absolute',
		
	}

	const font ={
		
			fontFamily: 'Joan',
			
			
		}

	const userFLowDiagram ={
		width: '100vw',
		
	}

	const wireframeDiagram={
		width: '80vw',
		display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
	}

	const swatch={
		height: '40vh',
		width:'40vh',
		borderRadius: '0px 30px 0px 30px',
		

	}

	const flexCont={
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
	}

	const flexContStyle={
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignContent: 'space-around',
		rowGap:'20px'
	}

	const overDesc={
		flexGrow: '2',
		margin: '25px',
	}

	const links={
		backgroundColor: '#0D1A25',
		color:'white',
		margin: '25px',
		padding:'20px',
		height: 'fit-content',
		width:'fit-content',
		borderRadius: '0px 30px 0px 30px',
		paddingBottom: '50px'
		
	}

	const linkOut={
		textDecoration:'none',
		color:'white',

	}

	const bgColor ={
		backgroundColor: '#0D1A25',
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		
	}
	const linkColor ={
		backgroundColor: '#F90606',
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		
	}

	const compColor ={
		backgroundColor: '#122535',
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		
	}

	const btnColor ={
		backgroundColor: '#59A9F0',
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		
	}

	const swatchDesc={
		width: '20vw',
		marginLeft: '20px'
	}

	const googleFont={
		
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		border: '1px solid gray',
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		
		
	}

	const imageBox={
		
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
		
		
	}

	const fontName={
		
	}

	const imageMovie={
		height: '30vh',
		width:'30vh',
		borderRadius: '0px 30px 0px 30px',
	}

	const faIcon ={
		height:'10vh'
	}
	const line ={
		float:'left',
		width:'160px',
		marginLeft:'60px',
		

	}

	const lineTwo ={
		float:'left',
		width:'160px',
		marginLeft: '160px',

	}

	const marg={
		margin:'5px',
		marginLeft:'100px',
		
	}

	const navMenu ={
		float:'right',
		display:'flex',
		flexDirection: 'row',
		
		flexWrap: 'wrap',
		alignContent: 'space-around',
		color:'white',
		

		
	}

	const navItem={
		paddingLeft:'1em',
		textDecoration:'none',
		color:'white',
		
	}
	const navItemLast={
		paddingLeft:'1em',
		paddingRight:'3em',
		textDecoration:'none',
		color:'white',
	}
	const underline={
		textDecoration:'none'
	}


  return (
	
    <div style={font} className="proj">
      <div className="projHeader">
		<div style={rectangleHeader}>
			<div class="menu" style={navMenu}>
			<a style={underline} href='#overview'>
				<p style={navItem}>Overview</p>
				</a>
				<a style={underline} href='#planning'>
				<p style={navItem}>Planning</p>
				
				</a>
				<a style={underline} href='#style'>
				<p style={navItem}>Styling Guide</p>
				</a>
				<a style={underline} href='#development'>
				<p style={navItem}>Development</p>
				</a>
				<a style={underline} href='#decisions'>
				<p style={navItemLast}>Decisions</p>
				</a>
			</div>
		</div>
		
		<img style={logoImg} src={logo} alt="" />
		
	  </div>
      <div className="projScreen">
		<img style={screensImg} src={screens} alt="" />
	  </div>
      <div className="projOverview" id="overview" >
		
			<hr style={line} />
			<br />
        <h2  style={marg}>Project Overview</h2>
		
		<hr style={lineTwo} />
		<br />
		<div className="projOverViewDetail" style={flexCont}>
		<div style={overDesc} >
			<h3 >Objective</h3>
			<p >Using React, build the client-side for an application called myFlix based on its existing server-side code (REST API and database). 
</p>
		</div>
		<div style={links}>
			<h3 >Github:</h3>
			<a href="https://github.com/sms165/movie-client" target="_blank"   style={linkOut} > https://github.com/sms165/movie-client</a>
			<br/>
			<br/>
			<h3 >Netlify (live version):</h3>
			
			<a href="https://myflix-moviedb.netlify.app/" target="_blank"style={linkOut} >https://myflix-moviedb.netlify.app/</a>
		</div>
		</div>
      </div>
      <div className="projPlanning" id="planning">
        
	  <hr style={line} />
			<br />
        <h2  style={marg}>Planning</h2>
		<hr style={lineTwo} />
		
		<br/>
		<div className="userStories" style={overDesc}>
			<h3 >User Stories</h3>
			<ul>
				<li>As a user, I want to be able to access information on movies, actors, directors and genres so that I am able to learn more.</li>
				<li>As a user, I want to be able to create a profile, make a favorites list to save favorite movies, and be able to update my profile data.</li>
			</ul>
		</div>
		<div className="userFlow" style={overDesc}>
			<h3 >User Flow</h3>
			<img style={userFLowDiagram} src={userFlow} alt="" />
		</div>
		<div className="wireframes" style={overDesc} >
			<h3 >Wireframes</h3>
			<img style={wireframeDiagram} src={wireframes} alt="" />
		</div>

      </div>
	  <br/>
	  <br/>
      <div className="projStyle" id="style">
	  <hr style={line} />
			<br />
        <h2  style={marg}>Style Guide</h2>
		<hr style={lineTwo} />
		<br />
        <div className="color" style={overDesc}>
          <h3 >Color Palette</h3>
          <p >
            I oriented the style of the website on the classical simple style in
            a dark theme.
          </p>
          <div className="swatches" style={flexContStyle}>
			<div className="bgCol" style={flexCont}>
            <div className="backgroundColor" style={bgColor} ></div>
            <div style={swatchDesc}>
              <h4 >Background Color:</h4>
              <p >#0D1A25</p>
            </div>
			</div>
			<div className="compCol" style={flexCont}>
            <div className="componentColor" style={compColor}></div>
            <div style={swatchDesc}>
              <h4>Component Color:</h4>
              <p>#122535</p>
            </div>
			</div>
			<div className="linkCol" style={flexCont}>
            <div className="linkColor" style={linkColor}></div>
            <div style={swatchDesc}>
              <h4>Link Hover Color:</h4>
              <p>#F90606</p>
            </div>
			</div>
			<div className="btnCol" style={flexCont}>
            <div className="buttonColor" style={btnColor}></div>
            <div style={swatchDesc}>
              <h4>Button Color:</h4>
              <p>#59A9F0</p>
            </div>
			</div>
			</div>
          </div>

<div className="typography" style={overDesc}>
		  <h3>Typography</h3>
          
          <div className="font" style={flexContStyle}>
			<div style={flexCont}>
            <div className="fontName" style={googleFont} ><div style={fontName}><h2 >Joan</h2></div></div>
            <div className="fontDesc" style={swatchDesc}>
              <h4>Google Font:</h4>
              <p>Designed by Paolo Biagini</p>
            </div></div>
		</div>
		

		<div className="icongraphy" >
		  <h3>Icongraphy</h3>
          <div style={flexContStyle}>
		  <div style={flexCont}>
         
            <div className="iconImage" style={googleFont}> <FontAwesomeIcon style={faIcon} icon={faTrashCan} /></div>
            <div className="iconDesc"  style={swatchDesc}>
              <h4>FontAwesome:</h4>
              <p>TrashCan</p>
            </div>
		</div>
		<div style={flexCont}>
		
            <div className="iconImage" style={googleFont}><FontAwesomeIcon style={faIcon}  icon={faPenToSquare} /></div>
            <div className="iconDesc"  style={swatchDesc}>
              <h4>FontAwesome:</h4>
              <p>Pen-to-Square</p>
            </div>
		</div>
		
		</div>
		</div>
		


		<div className="images" >
		  <h3>Images</h3>
          
		  <div style={flexContStyle}>
		  <div style={flexCont}>

          
            <div className="imgImage" style={imageBox}><img style={imageMovie} src={theater} alt="" /></div>
            <div className="imgDesc" style={swatchDesc}>
              <h4>Pixabay:</h4>
              <p>Free Image</p>
            </div>
		</div>

		<div style={flexCont}>
            <div className="imgImage" style={imageBox}><img style={imageMovie} src={movieImg}  /> </div>
            <div className="imageDesc" style={swatchDesc}>
              <h4>TheMovieDB:</h4>
              <p>Images for movies, actors, and directors.</p>
            </div>
		</div>
		</div>
		</div>

        </div>
      </div>
	  <br/>
	  <br/>
      <div className="projDevel" id="development">
	  <hr style={line} />
			<br />
        <h2  style={marg}>Development</h2>
		<hr style={lineTwo} />
		<br />
	
        <div className="techUsed" style={overDesc}>
          <h3>Technologies Used</h3>
          <ul>
            <li>Programmed using the MERN tech stack which stands for:</li>
            <ul>
              <li>MongoDB: Database used to store movie data</li>
              <li>Express: Node.js web framework</li>
              <li>React: JavaScript framework</li>
              <li>
                Node.js: runtime environment , allows JavaScript to be used on
                the server side
              </li>
            </ul>
            <li>HTML</li>
            <li>CSS / React Bootstrap</li>
          </ul>
        </div>
		<br/>
	  <br/>
        <div className="decisions" id="decisions" >
          
		  <hr style={line} />
			<br />
        <h2  style={marg}>Decisions made and consequences:</h2>
		<hr style={lineTwo} />
		<br />
          <ul>
            <li>
              As the lessons on CareerFoundry were not up to date with the new
              versions for example of React and React Router, I had to rely on
              other sources to program this site. As a web developer it is
              important to stay up to date and continue learning, which is why I
              choose to program with the current versions.<br/>
	  
            </li>
            <ul>
              <li>
                I studied the official documentation to help me complete the
                tasks, which was difficult at times but it gave me the
                opportunity to gain more experience with reading documentations.<br/>

              </li>
            </ul>
            <li>
              I decided to include more views, and functions than the lesson
              stated to have a chance to learn more.<br/>
            </li>
            <ul>
              <li>
                I wanted to make the password change function on the user update
                view more secure. The user needs to type in their old password
                and their new password, then in the backend the program checks
                if the old password is the same as that which is saved in the
                database and only if it returns true the password will be
                changed.<br/>
              </li>
              <ul>
                <li>
                  A consequence of this was that I had to go back to the API to
                  make a new endpoint which has the logic behind it to handle
                  the password comparison and change.<br/><br/>
                </li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
	
	
  );
}

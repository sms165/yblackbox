import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useRef, useState } from "react";
import { useEffect } from "react";

import '../../sass/style.scss';

export default function Contact() {

  const contactSideNav = useRef();
  const contactTitle = document.getElementById('contactTitle');
  const [contactSideNavIntersecting, setContactSideNavIntersecting] = useState();
  // console.log('isIntersecting', contactSideNavIntersecting)
  useEffect(() => {

    // console.log('aboutSideNav', aboutSideNav.current);
    const observer = new IntersectionObserver((entries) =>{
      const entry =entries[0];
      setContactSideNavIntersecting(entry.isIntersecting)
      // console.log('entry', entry);
    }) 
    observer.observe(contactSideNav.current);

    

    return () => {
    };
  }, []);


  if(contactSideNavIntersecting == true){
    contactTitle.classList.add("active");
    contactTitle.classList.remove("reveal");
  }
  
  if (contactSideNavIntersecting == false) {
    if(contactTitle.classList.contains("active")){
    contactTitle.classList.remove("active");
    contactTitle.classList.add("reveal");
    }
  }
  

  const SERVICE_ID = "service_dxgkupe";
const TEMPLATE_ID = "template_rczwl7p";
const USER_ID = "EN8tmj-G93IuOAs-N";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title:'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    

    <div ref={contactSideNav} className='contactBox'>
      
      <h2 className='formHeader'>Contact Me</h2>
      <div className="form">
       <form onSubmit={handleOnSubmit}>
        <input
          id='form-input-control-email'
         
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
         
        />
        <input
          id='form-input-control-last-name'
          
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          
        />
        <input
          id='form-input-control-subject'
          
          label='Subject'
          name='subject'
          placeholder='Subject…'
          required
          
        />
        <br/>
        <br/>
        <textarea

          id='form-textarea-control-opinion'
          rows={8}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <br/>
        <br/>
        <button className='formSubmit' type='submit' color='green'>Submit</button>
      </form>
    </div>
    </div>
    
  )
}

import React from "react";

import "../../sass/style.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";

import lottie from "lottie-web";
import characterAnim from "../../assets/data.json";

export default function About() {
  const animate = useRef(null);

  const aboutSideNav = useRef();
  const aboutMe = document.getElementById("aboutMe");
  const [aboutSideNavIntersecting, setAboutSideNavIntersecting] = useState();
  // console.log('iabout', aboutSideNavIntersecting)
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animate.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: characterAnim,
    });

    let options = {
      threshold: 0.7,
    };

    // console.log('aboutSideNav', aboutSideNav.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutSideNavIntersecting(entry.isIntersecting);
      // console.log('entry', entry);
    }, options);
    observer.observe(aboutSideNav.current);

    return () => instance.destroy();
  }, []);

  if (aboutSideNavIntersecting == true) {
    aboutMe.classList.add("active");
    aboutMe.classList.remove("reveal");
    console.log("aboutSideNav", aboutSideNav.current);
  }

  if (aboutSideNavIntersecting == false) {
    if (aboutMe.classList.contains("active")) {
      aboutMe.classList.remove("active");
      aboutMe.classList.add("reveal");
    }
  }

  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="image" ref={aboutSideNav}>
          <div ref={animate}></div>
        </div>

        <div className="aboutBox">
          <a id="about"></a>
          <p>
            Hello, my name is Stephanie Schlachter and I live in Germany. I am a
            full-stack developer in search for new and exiting opportunities.
          </p>
          <br />
          <p>Welcome to my page</p>
        </div>
      </div>
      <div id="aboutLink"></div>
    </div>
  );
}

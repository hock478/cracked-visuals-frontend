import React from "react";
import AboutUs1 from "./About-us1";
import BlogsTwoColumnSlider from "./Blogs-two-column-slider";
import CallToAction from "./Call-to-action";
import Clients1 from "./Clients1";
import Footer from "./Footer";
import IntroWithSlider1 from "./Intro-with-slider1";
import Navbar from "./Navbar";
import Numbers1 from "./Numbers";
import Services1 from "./Services1";
import SkillsCircle from "./Skills-circle";
import VideoWithTestimonials from "./Video-with-testimonials";
import Works1Slider from "./Works1-slider";
import DarkTheme from "../layouts/Dark";
import IntroTxt from "./Intro-txt/index.jsx";


const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroTxt  contactName="Cracked Visuals"/>

      {/* <IntroWithSlider1 sliderRef={fixedSlider} /> */}
      <div ref={MainContent} className="main-content">
        {/* <AboutUs1 /> */}
        {/* <Services1 /> */}
        {/* <Numbers1 /> */}
        {/* <Works1Slider /> */}
        {/* <VideoWithTestimonials /> */}
        {/* <SkillsCircle theme="dark" subBG /> */}
        {/* <Clients1 theme="dark" /> */}
        {/* <BlogsTwoColumnSlider /> */}
        <CallToAction subBG />
        {/* <Footer /> */}
      </div>
    </DarkTheme>
  );
};

export default Homepage1;

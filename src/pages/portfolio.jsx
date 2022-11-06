import React from "react";
import AboutUs1 from "../components/About-us1";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import IntroTxt from "../components/Intro-txt";
import IntroTxt2 from "../components/Intro-txt2";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import Navbar from "../components/Navbar";
import ProjectDetailsVideo from "../components/Project-details-video";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import Works1Slider from "../components/Works1-slider";
import DarkTheme from "../layouts/Dark";



const Portfolio = () => {
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
  
        <IntroWithSlider1 sliderRef={fixedSlider} />

       <div ref={MainContent} className="main-content">
          <Works1Slider />

          <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg.jpg"
          videoType="https://www.youtube.com/watch?v=XB2TPhj1taw"
          videoId="XB2TPhj1taw"
        />
        <br></br>
        <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg2.jpg"
          videoType="https://www.youtube.com/watch?v=1lQAMQcf3bU"
          videoId="1lQAMQcf3bU"
        />
        <br></br>
        <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg3.jpg"
          videoType="https://www.youtube.com/watch?v=JBVPZxosng4"
          videoId="JBVPZxosng4"
        />
        <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg4.jpg"
          videoType="https://www.youtube.com/watch?v=9HHXTsm5_R0"
          videoId="9HHXTsm5_R0"
        />
          <CallToAction subBG />
        </div>
      </DarkTheme>
    );
}
export default Portfolio
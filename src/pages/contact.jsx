import React from "react";
import ContactHeader from "../components/Contact-header";
import ContactWithMap from "../components/Contact-with-map";
import IntroTxt from "../components/Intro-txt";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Dark";

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
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
  }, []);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <IntroTxt contactName="Contact Us!"/>
      {/* <ContactHeader sliderRef={fixedHeader} /> */}
        <ContactWithMap />
  
    </DarkTheme>
  );
};

export default Contact;

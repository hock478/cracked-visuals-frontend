import React from "react";

const IntroTxt = ({subBG, contactName}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/k.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <h1>{contactName}</h1>

            <div className="cont">
              {/* <h6>Cracked Visuals</h6> */}
              {contactName?.includes("Cracked") ? <a href="/portfolio"><h4>Photography &amp; Videography Services</h4></a>: ""}
              <div className="social-icon">
                <a href="https://www.instagram.com/crackedvisualz/"  target="_blank" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCTUsx4sMXnMnPyfoXXZVdew" target="_blank" className="icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;

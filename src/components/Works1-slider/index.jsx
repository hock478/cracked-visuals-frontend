import React, { useEffect, useState } from "react";
import works1SliderData from "../../data/sections/works1Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDriveSlides } from "../../data/drive-integration/drive-photos";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works1Slider = () => {

  const [styling, setStyling] = useState(false)
  const { slides, loading, error } = useDriveSlides(); // auto-refresh every 60s
  const data = slides;
  


  useEffect(() => {
    let hasTouchScreen = false;

    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
      }
    }

    
      setStyling(hasTouchScreen)
    
  },[])
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperKey = slides.map(s => s.id).join('|') || 'empty';

    if (error) {
    console.warn(error);
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="work-carousel section-padding pt-0 metro position-re">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
              key={swiperKey}
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                observer={true}
  observeParents={true}
  observeSlideChildren={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
              >
                {data.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: `${styling ? "contain" : "cover"}`
                        }}
                      ></div>
                      <div className="cont">
                        <h6 className="color-font">
                          <Link href="/works/works-dark">{slide.title}</Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            {slide.secTex}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
              >
                <span className="simple-btn right">Next</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
              >
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works1Slider;

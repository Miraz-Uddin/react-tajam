import React from "react";

export default function BannerSlider() {
  return (
    <div className="full-wrapper banner" name="banner">
      <div className="wrapper banner-content">
        <h1>We Are Awesome Creative Agency</h1>
        <h2>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit.
        </h2>
        <a href="#">learn more</a>
        <div className="circle-slide">
          <div className="slide">
            <i className="far fa-circle"></i>
            <div className="slide-over">
              <i className="fas fa-circle"></i>
            </div>
          </div>
          <div className="slide">
            <i className="far fa-circle"></i>
            <div className="slide-over">
              <i className="fas fa-circle"></i>
            </div>
          </div>
          <div className="slide">
            <i className="far fa-circle"></i>
            <div className="slide-over">
              <i className="fas fa-circle"></i>
            </div>
          </div>
          <div className="slide">
            <i className="far fa-circle"></i>
            <div className="slide-over">
              <i className="fas fa-circle"></i>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
}

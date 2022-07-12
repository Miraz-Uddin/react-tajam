import React from "react";

export default function Quote() {
  return (
    <>
      <div className="full-wrapper quote">
        <div className="wrapper quote-content">
          <p>
            <i className="flaticon-quotation-marks"></i>
          </p>
          <h2>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </h2>
          <h3>JANE GALADRIEL</h3>
          <h4>CEO TENGKUREP</h4>
          <div className="quote-slide">
            <div className="slides">
              <i className="fas fa-circle"></i>
              <div className="slides-over">
                <i className="fas fa-circle"></i>
              </div>
            </div>
            <div className="slides">
              <i className="fas fa-circle"></i>
              <div className="slides-over">
                <i className="fas fa-circle"></i>
              </div>
            </div>
            <div className="slides">
              <i className="fas fa-circle"></i>
              <div className="slides-over">
                <i className="fas fa-circle"></i>
              </div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
      </div>
    </>
  );
}

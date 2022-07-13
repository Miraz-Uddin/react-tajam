import React from "react";

export default function OurStory() {
  return (
    <>
      <div className="full-wrapper about" name="about">
        <div className="wrapper">
          <div className="about-left">
            <img src="assets/images/story_img.png" alt="Image" />
          </div>
          <div className="about-right">
            <h2>OUR STORY</h2>
            <p className="para1">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus
            </p>
            <p className="para2">
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <a href="#">learn more</a>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import Venobox from "venobox";

export default function WatchOurStory() {
  useEffect(() => {
    new Venobox({
      autoplay: false,
      spinner: "wave",
      selector: ".our-story-video",
    });
  }, []);
  return (
    <>
      <div className="full-wrapper story" name="story">
        <div className="wrapper story-content">
          <a
            class="our-story-video"
            data-vbtype="video"
            href="https://youtu.be/SUSSl5vO27k"
          >
            <i className="flaticon-play-button"></i>
          </a>
          <h2>WATCH OUR STORY</h2>
        </div>
      </div>
    </>
  );
}

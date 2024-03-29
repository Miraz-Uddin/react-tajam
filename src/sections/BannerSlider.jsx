import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Typed from "react-typed";

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="full-wrapper banner" name="banner">
      <div className="wrapper banner-content">
        <Slider {...settings}>
          <div>
            <h1>
              We{" "}
              <Typed
                strings={[
                  "Are Awesome Creative Agency",
                  "Make Life Easy",
                  "Build Dream",
                  "Value Your Time and Money",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </h1>
            <h2>
              A reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text.
            </h2>
          </div>
          <div>
            <h1>
              We{" "}
              <Typed
                strings={[
                  "Make Life Easy",
                  "Build Dream",
                  "Value Your Time and Money",
                  "Are Awesome Creative Agency",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </h1>
            <h2>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text.A reader will be distracted by the
              readable content of a page when looking at its layout.
            </h2>
          </div>
          <div>
            <h1>
              We{" "}
              <Typed
                strings={[
                  "Build Dream",
                  "Value Your Time and Money",
                  "Are Awesome Creative Agency",
                  "Make Life Easy",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </h1>
            <h2>
              As opposed to using 'Content here, content here', making it look
              like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text.A
              reader will be distracted by the readable content of a page when
              looking at its layout.The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </h2>
          </div>
          <div>
            <h1>
              We{" "}
              <Typed
                strings={[
                  "Value Your Time and Money",
                  "Are Awesome Creative Agency",
                  "Make Life Easy",
                  "Build Dream",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </h1>
            <h2>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text.A reader will be
              distracted by the readable content of a page when looking at its
              layout.The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters. As opposed to using
              'Content here, content here', making it look like readable
              English.
            </h2>
          </div>
        </Slider>
        <div>
          {/* <a href="#">Get Connected</a> */}
          <Link to="/">Get Connected</Link>
        </div>
      </div>
    </div>
  );
}

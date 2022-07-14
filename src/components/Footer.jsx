import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="full-wrapper footer">
        <div className="wrapper footer-content">
          <div className="footer-left">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
            <p>
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </div>
          <div className="footer-center">
            <h2>OUR STUDIO</h2>
            <h3>
              Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
              Jakarta Barat 11480 - Indonesia<i className="flaticon-pin"></i>
            </h3>
            <p>
              (+62) 21-2224 3333 <i className="flaticon-telephone"></i>
            </p>
          </div>
          <div className="footer-right">
            <h2>STAY IN TOUCH</h2>
            <div className="form-sub">
              <form action="#">
                <input type="email" placeholder="Subscribe our newsletter" />
                <button type="submit">
                  <FaRegPaperPlane />
                </button>
              </form>
            </div>
            <div className="social">
              <a href="https://www.facebook.com" target="_blank">
                <i className="flaticon-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="flaticon-twitter"></i>
              </a>
              <a href="https://dribbble.com" target="_blank">
                <i className="flaticon-basketball"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <i className="flaticon-instagram"></i>
              </a>
              <a
                href="https://aboutme.google.com/u/0/?referer=gplus"
                target="_blank"
              >
                <i className="flaticon-google-plus"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <i className="flaticon-youtube"></i>
              </a>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="wrapper footer-copy">
          <div className="footer-terms">
            <ul>
              <li>
                <a href="#">HELP</a>
                <a href="#">TERMS & CONDITION</a>
                <a href="#">PRIVACY</a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2022 - Miraz Uddin</p>
          </div>
          <div className="clr"></div>
        </div>
      </div>
      <div className="backToTop">
        <img src="assets/images/story_img.png" alt="Logo" />
      </div>
    </>
  );
}

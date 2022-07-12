import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className="full-wrapper client">
        <div className="wrapper">
          <div className="form">
            <h2>GIVE US A GOOD NEWS</h2>
            <form action="#" method="POST">
              <div className="field">
                <input type="text" placeholder="Name" id="input_name" />
                <div className="err" id="input_name_err"></div>
              </div>
              <div className="field">
                <input type="email" placeholder="Email" id="input_email" />
                <div className="err" id="input_email_err"></div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" id="input_subject" />
                <div className="err" id="input_subject_err"></div>
              </div>
              <div className="field">
                <textarea
                  placeholder="Your Message"
                  id="input_message"
                ></textarea>
              </div>
              <div className="field btn">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
          <div className="partners">
            <h2>OUR HAPPY CLIENT</h2>
            <div className="partner-left">
              <ul>
                <li>
                  <a href="https://www.zara.com" target="_blank">
                    <img src="assets/images/partner01.png" alt="partner 01" />
                  </a>
                </li>
                <li>
                  <a href="https://www.barneys.com" target="_blank">
                    <img src="assets/images/partner03.png" alt="partner 03" />
                  </a>
                </li>
                <li>
                  <a href="https://www.calvinklein.us/en" target="_blank">
                    <img src="assets/images/partner05.png" alt="partner 05" />
                  </a>
                </li>
                <li>
                  <a href="https://www.converse.com/" target="_blank">
                    <img src="assets/images/partner07.png" alt="partner 07" />
                  </a>
                </li>
                <li>
                  <a href="https://www.levi.com/US/en_US/" target="_blank">
                    <img src="assets/images/partner09.png" alt="partner 09" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="partner-right">
              <ul>
                <li>
                  <a href="https://shop.mango.com/us" target="_blank">
                    <img src="assets/images/partner02.png" alt="partner 02" />
                  </a>
                </li>
                <li>
                  <a href="https://www.gucci.com/int/en/" target="_blank">
                    <img src="assets/images/partner04.png" alt="partner 04" />
                  </a>
                </li>
                <li>
                  <a href="https://www.nike.com" target="_blank">
                    <img src="assets/images/partner06.png" alt="partner 06" />
                  </a>
                </li>
                <li>
                  <a href="https://us.puma.com" target="_blank">
                    <img src="assets/images/partner08.png" alt="partner 08" />
                  </a>
                </li>
                <li>
                  <a href="https://www.billabong.com" target="_blank">
                    <img src="assets/images/partner10.png" alt="partner 10" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="clr"></div>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </>
  );
}

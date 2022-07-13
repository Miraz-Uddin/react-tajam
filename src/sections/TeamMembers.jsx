import React from "react";

export default function TeamMembers() {
  return (
    <>
      <div className="full-wrapper team" name="teams">
        <div className="wrapper team-content">
          <div className="sameHead team-head">
            <h2>MEET OUR AMAZING TEAM</h2>
            <h3>Lorem ipsum dolor sit amet proin gravida nibh vel velit</h3>
          </div>
          <div className="team-members">
            <div className="team-member">
              <div className="picture"></div>
              <div className="member-detail">
                <h2>SEMF UCUK</h2>
                <h3>CEO & FOUNDER</h3>
              </div>
            </div>
            <div className="team-member">
              <div className="picture"></div>
              <div className="member-detail">
                <h2>DIK ADALIN</h2>
                <h3>ENGINEERING</h3>
              </div>
            </div>
            <div className="team-member">
              <div className="picture"></div>
              <div className="member-detail">
                <h2>JENG KOL</h2>
                <h3>DESIGNER</h3>
              </div>
            </div>
            <div className="team-member mr">
              <div className="picture"></div>
              <div className="member-detail">
                <h2>PET ROMAK</h2>
                <h3>MARKETING</h3>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="join">
            <h2>Become part of our dream team, let’s join us !</h2>
            <a href="#">WE ARE HIRING</a>
          </div>
        </div>
      </div>
    </>
  );
}

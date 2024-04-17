import React, { useState } from "react";
import "./team.scss";
import img2 from "../../assets/5thplus1doubleflip2 (1).png";
import img3 from "../../assets/1rdteam.png";
import img4 from "../../assets/2rdteam.png";
import img5 from "../../assets/3rdteam.png";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
function Team() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const divStyles1 = {
    // backgroundColor: isHovered1 ? "blue" : "red", // Change the background color on hover
    color: "white",
    padding: "10px",
    transition: "background-color 0.3s ease", // Add a smooth transition effect
  };
  const divStyles2 = {
    // backgroundColor: isHovered2 ? "blue" : "red", // Change the background color on hover
    color: "white",
    padding: "10px",
    transition: "background-color 0.3s ease", // Add a smooth transition effect
  };
  const divStyles3 = {
    // backgroundColor: isHovered3 ? "blue" : "red", // Change the background color on hover
    color: "white",
    padding: "10px",
    transition: "background-color 0.3s ease", // Add a smooth transition effect
  };
  return (
    <div className="team" id="team">
      <div className="teamCont">
        <div className="overlay"></div>
        <div className="overlay1"></div>
        <img src={img2} alt="" className="img-back-team" />
        <div className="teamCont-content">
          <div className="teamCont-heading">
            <div className="teamCont-heading-top">Team</div>
            <div className="teamCont-heading-bottom">
              Team with a track record of building Software Products.
            </div>
          </div>
          <div className="teamCont-card">
            <div className="teamCont-card-left card-team">
              <div
                className="e-card"
                style={divStyles1}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                {isHovered1 ? (
                  <div className="img-hovered">
                    <div className="img-hovered-up">
                      Make something people want
                    </div>
                    <div className="img-hovered-down">
                      <a href="https://twitter.com/amitkumariitm">
                        <BsTwitter
                          className="twitter"
                          style={{
                            color: "#00acee",
                            width: "28px",
                            height: "28px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/amitkumariitm/">
                        <BsLinkedin
                          className="linkedin"
                          style={{
                            color: "#0A66C2",
                            width: "23px",
                            height: "23px",
                          }}
                        />
                      </a>
                      <a href="https://github.com/amitkumariitmadras">
                        <BsGithub
                          className="github"
                          style={{
                            color: "#4078c0",
                            width: "28px",
                            height: "28px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="e-card-image">
                      <img src={img3} alt="" className="e-card-class" />
                    </div>
                    <div className="e-card-content">Amit Kumar</div>
                  </>
                )}
              </div>
            </div>
            <div className="teamCont-card-middle card-team">
              <div
                className="e-card"
                style={divStyles2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                {isHovered2 ? (
                  <div className="img-hovered">
                    <div className="img-hovered-up">
                      Love solving Problem hasn't been solved before
                    </div>
                    <div className="img-hovered-down">
                      <a href="https://twitter.com/5thplusChain">
                        <BsTwitter
                          className="twitter"
                          style={{
                            color: "#00acee",
                            width: "28px",
                            height: "28px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/yatharth-y-13998a215/">
                        <BsLinkedin
                          className="linkedin"
                          style={{
                            color: "#0A66C2",
                            width: "23px",
                            height: "23px",
                          }}
                        />
                      </a>
                      <a href="https://github.com/yatharth-1504">
                        <BsGithub
                          className="github"
                          style={{
                            color: "#4078c0",
                            width: "28px",
                            height: "28px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="e-card-image">
                      <img src={img4} alt="" className="e-card-class" />
                    </div>
                    <div className="e-card-content">Yatharth</div>
                  </>
                )}
              </div>
            </div>
            <div className="teamCont-card-right card-team">
              <div
                className="e-card"
                style={divStyles3}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                {isHovered3 ? (
                  <div className="img-hovered">
                    <div className="img-hovered-up">
                      what is your superpower?
                    </div>
                    <div className="img-hovered-down">
                      <button
                        style={{
                          backgroundColor: "#6434b8",
                          color: "white",
                          padding: "10px",
                          transition: "background-color 0.3s ease",
                          borderRadius: "8px",
                          border: "1px solid #eee",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                        }}
                      >
                        Apply Here
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="e-card-image">
                      <img src={img5} alt="" className="e-card-class" />
                    </div>
                    <div className="e-card-content">Apply to Join</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

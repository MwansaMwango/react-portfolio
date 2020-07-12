import React from "react";
import "./About.css";
import back1 from "../../img/2.jpg";
import { Link } from "react-awesome-slider/dist/navigation";

const About = () => {
  return (
    <>
      <img className="back" src={back1} alt="back1" />
      <div className="contentM">
        <div className="top">
          <img
            className="avat"
            src="https://ca.slack-edge.com/TSDSFVD9C-USV3J72TX-c22d313a5f1f-512"
            alt="Mwansa"
          />

          <h1>Hi, I'm Mwansa Mwango</h1>
          <h2>
            <span>Full Stack Developer</span>
          </h2>
          <h5>
            Creating innovative solutions using MERN stack.
          </h5>
        </div>
        <div className="bot">
          <Link className="button" href="skills">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;

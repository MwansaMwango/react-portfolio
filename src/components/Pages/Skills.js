import React from "react";
import back2 from "../../img/5.jpg";

//main skills
import reactLogo from "../../img/react.png";
import js from "../../img/js.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import boot from "../../img/bootstrap.png";
import npm from "../../img/npm.png";
import rest from "../../img/rest.png";
import git from "../../img/git.png";

// additional skills
import jq from "../../img/jq.png";
import sass from "../../img/sass.png";
import lodash from "../../img/lodash.png";
import ph from "../../img/ph.png";
import node from "../../img/node.png";

const Skills = () => {
  return (
    <>
      <img className="back" src={back2} alt="back2" />
      <div className="content skills">
        <div className="bot">
          <div className="line">
            <h3>Main skills:</h3>
            <div className="tech">
              <img
                src={reactLogo}
                alt="react logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              
              <img
                src={js}
                alt="js logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <img
                src={html}
                alt="html logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <img
                src={css}
                alt="css logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <img src={boot} alt="boot logo" width="85" />
              <img src={npm} alt="npm logo" width="85" />
              <img src={rest} alt="rest logo" width="85" />
              <img
                src={git}
                alt="git logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <img src={node} alt="node logo" width="85" style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }} />
            </div>
            <h3>Additional skills:</h3>
            <div className="tech">
              <img
                src={jq}
                alt="jq logo"
                width="85"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <img src={sass} alt="sass logo" width="85" />
              <img src={lodash} alt="lodash logo" width="85" />
              <img src={ph} alt="photoshop logo" width="85" />
            </div>
            <a
              href="https://drive.google.com/open?id=1GVAOtR6z9MPfUKEDJYRLVEsIey0Ov7n-"
              className="text-right"
            >
              <h3>
                <i className="far fa-file-pdf mx-2"></i>Resume PDF{" "}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";

import back3 from "../../img/8.jpg";
import gmail from "../../img/gmail.png";
import git from "../../img/git.png";
import linkedin from "../../img/in.png";

const Contacts = () => {
  return (
    <>
      <img className="back" src={back3} alt="back3" />
      <div className="content contacts">
        <div className="top hide">
          <h1>Contacts</h1>
        </div>
        <div className="bot">
          <div className="line">
            <h2>Let's talk!</h2>
          </div>
        </div>
        <div className="line">
          <h2>E-mail:</h2>
          <a href="mailto:mwansad.mwango@gmail.com">
            <h4>
              <img src={gmail} alt="gmail logo" width="85" />
              mwansad.mwango@gmail.com
            </h4>
          </a>
        </div>
        <div className="line">
          <h2>Links:</h2>
          <div>
            <a
              href="https://github.com/MwansaMwango"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src={git} alt="git logo" width="85"/>
            </a> 
            <hr></hr>
            <a
              href="https://www.linkedin.com/in/mwansa-m-88ab3032"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin logo" width="85"  />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

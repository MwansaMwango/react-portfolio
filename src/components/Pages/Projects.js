import React from "react";
import back3 from "../../img/9.jpg";

import proj1 from "../../img/proj1.JPG";
import proj2 from "../../img/proj2.PNG";
import proj3 from "../../img/proj3.PNG";
import proj4 from "../../img/proj4.PNG";

const Projects = () => {
  return (
    <>
      <img className="back" src={back3} alt="back3" />
      <div className="content">
        <div className="top hide">
          <h1>Projects</h1>
        </div>
        <div className="bot">
          <a
            href="https://schoolpool-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row">
              <img src={proj1} alt="project1 logo" className="img-thumbnail" />
              <div>
                <h3>School Pool Perth</h3>
                <a
                  href="https://github.com/georgiellis/project2"
                  target="_blank"
                >
                  <i className="fab fa-github-square fa-2x float-right"></i>
                </a>
                <h6>
                  A carpooling app for parents/guardians doing school runs to
                  common destinations. Reduces fuel costs, traffic congestion
                  and carbon emmissions. As a parent, I want to book a ride
                  ahead of time for my children so they arrive at their
                  destination within a defined time window. I want the app to
                  store my default information so that I can minimize re-entry.
                  I want to be able to book rides on my mobile phone or desktop
                  computer. As a driver (parent of other children) I want to be
                  able to chose what rides I accept. When I accept a drive
                  request I want the app to tell me how much earlier I need to
                  leave and provide a route for all of my pickups. I want to be
                  able to accept rides on my mobile phone or desktop computer.
                </h6>
              </div>
            </div>
          </a>
          <a
            href="https://mitchelle-b.github.io/Asset-Portfolio-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row">
              <img src={proj2} alt="project2 logo" className="img-thumbnail" />
              <div>
                <h3>Stock Portfolio Generator</h3>
                <a
                  href="https://github.com/Mitchelle-B/Asset-Portfolio-Generator"
                  target="_blank"
                >
                  <i className="fab fa-github-square fa-2x float-right"></i>
                </a>
                <h6>
                  When l open the app, I am presented with a selection of
                  conservative, balanced or aggressive risk tolerance options;
                  If l know my risk tolerance, I select an option that aligns
                  with my risk tolerance and l am presented with stocks that
                  align my risk profile; If l don’t know my risk profile, I
                  select the option to participate in a quiz that is designed to
                  determine my risk tolerance based on a set of carefully
                  selected questions and a set algorithm; Once my risk tolerance
                  is determined from quiz, I am presented with a selection of
                  stocks that align my risk profile; When l click on each stock
                  suggestion, I am presented with top news stories about my
                  recommended stocks.
                </h6>
              </div>
            </div>
          </a>
          <a
            href="https://mwansamwango.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row">
              <img src={proj3} alt="project3 logo" className="img-thumbnail" />
              <div>
                <h3>Weather Dash</h3>
                <a
                  href="https://github.com/MwansaMwango/weather-dashboard"
                  target="_blank"
                >
                  <i className="fab fa-github-square fa-2x float-right"></i>
                </a>
                <h6>
                  An app that retrieves current and forecast weather data in
                  over 200 cities around the world! Utilises open weather third
                  party APIs. Displays city name, temperature, humidity,
                  UV-index and icon corresponding to weather. UV-index
                  backhround is colour coded to show serverity. Provides a
                  forecast upto five days.
                </h6>
              </div>
            </div>
          </a>
          <a
            href="https://mwansamwango.github.io/work-day-scheduler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row">
              <img src={proj4} alt="project3 logo" className="img-thumbnail" />
              <div>
                <h3>Workday Scheduler</h3>
                <a
                  href="https://github.com/MwansaMwango/work-day-scheduler"
                  target="_blank"
                >
                  <i className="fab fa-github-square fa-2x float-right"></i>
                </a>
                <h6>
                  An app that allows a user to organise the busy day and save
                  to-do activities on an hourly basis. Allows the user to edit
                  and save activites in local storage.
                </h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;

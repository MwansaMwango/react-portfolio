import React from "react";
import { About, Skills, Contacts, Projects } from "../Pages";
import AwesomeSlider from "react-awesome-slider";
import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Slider = withNavigationHandlers(AwesomeSlider);

const NavigationSlider = () => {
    return (
        <Slider
            className="awesome-slider"
            animation="cubeAnimation"
            organicArrows={true}
            buttons={true}
            infinite={true}
            // mobileTouch={true}
            media={[
                {
                    slug: "about",
                    className: "slide",
                    children: <About />
                },
                {
                    slug: "skills",
                    className: "slide",
                    children: <Skills />
                },
                {
                    slug: "projects",
                    className: "slide",
                    children: <Projects />
                },
                {
                    slug: "contacts",
                    className: "slide",
                    children: <Contacts />
                }
            ]}
        />
    );
};

export default NavigationSlider;

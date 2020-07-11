import React from "react";
import NavigationSlider from "./NavigationSlider";
import Menu from "./Menu";

import { Provider } from "react-awesome-slider/dist/navigation";

import "./App.css";
import "./Pages.css";

const App = () => {
    return (
        <div className="App">
            <Provider slug="about">
                <Menu />
                <NavigationSlider />
            </Provider>
        </div>
    );
};

export default App;

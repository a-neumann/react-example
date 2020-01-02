import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Application } from "./components/application/Application";

const dependencies = {
    a: 1,
    b: 2
};

ReactDOM.render((
    <Provider {...dependencies}>
        <Application />
    </Provider>
), document.getElementById("root"));

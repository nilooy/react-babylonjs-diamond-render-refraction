import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppNew from "./AppNew";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import "material-icons";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<AppNew />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

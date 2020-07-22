import React, { useEffect, Fragment } from "react";
import M from "materialize-css";

const BtnTipo = ({ changeColor }) => {
  useEffect(() => {
    var elems = document.getElementById("btnTipo");
    M.FloatingActionButton.init(elems, {
      direction: "left",
      hoverEnabled: false
    });
  }, []);

  return (
    <Fragment>
      <div
        id="btnTipo"
        className="fixed-action-btn horizontal click-to-toggle spin-close"
      >
        <button
          id="main-btn-floating"
          className="btn-floating btn-large teal pulse"
        >
          <i className="large material-icons">signal_wifi_4_bar</i>
        </button>
        <ul>
          <li>
            <button
              onClick={() => changeColor("saffire")}
              className="btn-floating blue darken-2"
            >
              <i className="material-icons">details</i>
            </button>
          </li>
          <li>
            {" "}
            <button
              onClick={() => changeColor("ruby2")}
              className="btn-floating red darken-2"
            >
              <i className="material-icons">details</i>
            </button>
          </li>

          <li>
            {" "}
            <button
              onClick={() => changeColor("smeraldo")}
              className="btn-floating green darken-2"
            >
              <i className="material-icons">details</i>
            </button>
          </li>

          <li>
            {" "}
            <button
              onClick={() => changeColor("giallo")}
              className="btn-floating yellow darken-2"
            >
              <i className="material-icons">details</i>
            </button>
          </li>

          <li>
            {" "}
            <button
              onClick={() => changeColor("diamond")}
              className="btn-floating black darken-2"
            >
              <i className="material-icons">details</i>
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BtnTipo;

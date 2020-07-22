import React, { useState, Fragment } from "react";
import Stone from "./components/stones/Bitstones";
import BtnTipo from "./components/BtnTipo";

const App = () => {
  const totalModel = 11;
  const [color, setColor] = useState("diamond");
  const [modelNumber, setModelNumber] = useState(1);

  const changeColor = (color) => {
    //state of color: that can be changed dynamically
    setColor(color);
  };

  const updateModel = () => {
    if (modelNumber < totalModel) {
      setModelNumber(modelNumber + 1);
    } else {
      setModelNumber(1);
    }
  };

  return (
    <Fragment>
      {modelNumber === 1 && <Stone color={color} model="diamond" />}
      {modelNumber === 2 && <Stone color={color} model="cushion" />}
      {modelNumber === 3 && <Stone color={color} model="emerald" />}
      {/* {modelNumber === 4 && <Stone color={color} model="emerald3" />} */}
      {modelNumber === 4 && <Stone color={color} model="heart" />}
      {modelNumber === 5 && <Stone color={color} model="oval" />}
      {modelNumber === 6 && <Stone color={color} model="round" />}
      {modelNumber === 7 && <Stone color={color} model="baguette" />}
      {modelNumber === 8 && <Stone color={color} model="asscher" />}
      {modelNumber === 9 && <Stone color={color} model="emerald" />}
      {modelNumber === 10 && <Stone color={color} model="marqulse" />}
      {modelNumber === 11 && <Stone color={color} model="pear" />}
      <BtnTipo changeColor={changeColor} />

      <button
        style={{ position: "fixed", top: 10, right: 10, fontSize: 30 }}
        className="btn-floating btn-large waves-effect waves-light red"
        onClick={updateModel}
      >
        {modelNumber}
      </button>
    </Fragment>
  );
};

export default App;

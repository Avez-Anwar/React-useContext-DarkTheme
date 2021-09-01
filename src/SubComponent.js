import React, { useContext } from "react";
import { DarkThemeVariable } from "./App";
import "./SubComponent.css";

function SubComponent() {
  const newDarkTheme = useContext(DarkThemeVariable);
  console.log(newDarkTheme);

  return (
    <div
      style={{ backgroundColor: `${newDarkTheme ? "#CCC" : "#333"}` }}
      className="newDarkTheme">
      <h1>{newDarkTheme ? "Light" : "Dark"}</h1>
    </div>
  );
}

export default SubComponent;

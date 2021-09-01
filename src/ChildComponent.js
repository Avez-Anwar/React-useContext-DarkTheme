import React, { useContext } from "react";
import { DarkThemeVariable } from "./App";
import SubComponent from "./SubComponent";

function ChildComponent() {
  return (
    <div>
      <SubComponent />
    </div>
  );
}

export default ChildComponent;

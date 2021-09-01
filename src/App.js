import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

//using createContext Property
export const DarkThemeVariable = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  //Toggle Handler
  const handleClick = () => {
    setDarkTheme(!darkTheme);
    // setDarkTheme((prevState) => !prevState);
  };

  return (
    //using DarkThemeVariable as Provider
    <DarkThemeVariable.Provider value={darkTheme}>
      <button onClick={handleClick}>Toggle</button>
      <ChildComponent />
    </DarkThemeVariable.Provider>
  );
}

export default App;

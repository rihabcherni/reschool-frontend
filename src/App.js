import { useState } from "react";
import DarkLightColor from "./layout/header/DarkLightColor";
import { ThemeProvider } from "styled-components";
import "./App.css";

const LightTheme = {
  pageBackground: "white",
  textColor: "black",
  mapColor:"white",
  iconColor:"#3CB371"
};

const DarkTheme = {
  pageBackground: "#282c36",
  textColor: "white",
  mapColor:"red",
  iconColor:"#00FF7F"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}
function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
      <DarkLightColor theme={theme} setTheme={setTheme} />
    </ThemeProvider>
        );
      }
export default App;

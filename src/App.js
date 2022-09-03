import { useState } from "react";
import { MyKeyboard } from "./components/MyKeyboard";
import { ThemeContext } from "./context/themeContext";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className=""
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: theme === "light" ? "#fff" : "#000",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", top: "20px" }}>
          {/* <input
            type="checkbox"
            value={theme === "light"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            id="btn-switch"
          ></input>
          <label htmlFor="btn-switch" className="lbl-switch"></label> */}
        </div>

        <MyKeyboard themeBtn={theme} setThemeBtn={setTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

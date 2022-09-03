import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeButton = ({ theme, setTheme }) => {
  return (
    <div
      style={{
        background: theme === "light" ? "#Fff" : "#4E505F",
        borderRadius: "10px"
      }}
    >
      <button
        className={
          theme === "light"
            ? "btnThemeLight themeSelectionLigth"
            : "btnThemeDark "
        }
        onClick={() => setTheme("light")}
      >
        <FaSun size={24} />
      </button>
      <button
        className={
          theme === "light"
            ? "btnThemeLight "
            : "btnThemeDark themeSelectionDark"
        }
        onClick={() => setTheme("dark")}
      >
        <FaMoon size={24} />
      </button>
    </div>
  );
};

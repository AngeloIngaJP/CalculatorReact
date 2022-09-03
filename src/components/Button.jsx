import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Styles } from "../styles/globalStyles";

export const Button = ({ title, onClick, isBlue = false, isGray = false }) => {
  const theme = useContext(ThemeContext);
  const btnStyle = isBlue
    ? Styles.btnBlue
    : isGray
    ? Styles.btnGray
    : theme === "light"
    ? Styles.btnLight
    : Styles.btnDark;

  return (
    <div
      style={
        title === "="
          ? { ...btnStyle, flexGrow: 2, borderBottomRightRadius: "30px" }
          : title === "C"
          ? { ...btnStyle, borderTopLeftRadius: "30px" }
          : title === "⌫"
          ? { ...btnStyle, borderTopRightRadius: "30px" }
          : title === "％"
          ? { ...btnStyle, borderBottomLeftRadius: "30px" }
          : { ...btnStyle }
      }
      onClick={onClick}
      onMouseEnter={() => "red"}
    >
      <div
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </div>
    </div>
  );
};

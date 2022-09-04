import { ThemeContext } from "../context/themeContext";
import { useState, useContext, useEffect } from "react";
import { Button } from "./Button";
import { Styles } from "../styles/globalStyles";
import { myColors } from "../styles/colors";
import { ThemeButton } from "./ThemeButton";

export const MyKeyboard = ({ themeBtn, setThemeBtn }) => {
  const theme = useContext(ThemeContext);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [testResult, setTestResult] = useState("");
  const [numTest, setNumTest] = useState("");

  const handlePress = (buttonValue) => {
    if (result) {
      setResult(null);
    }
    setNumTest(numTest + buttonValue);
  };

  const clear = () => {
    setTestResult("");
    setNumTest("");
  };

  const truncNumber = (x, posiciones = 10) => {
    if (!Number.isInteger(x)) {
      var s = x.toString();
      var decimalLength = s.indexOf(".") + 1;
      var numStr = s.substr(0, decimalLength + posiciones);
      console.log(numStr);
      return Number(numStr);
    }

    return x;
  };

  const getResult = () => {
    if (!secondNumber) {
      setResult(parseFloat(firstNumber));
      setFirstNumber("");
      setSecondNumber("");
    } else {
      switch (operation) {
        case "+":
          clear();
          setResult(
            truncNumber(parseFloat(secondNumber) + parseFloat(firstNumber))
          );
          break;
        case "-":
          clear();
          setResult(
            truncNumber(parseFloat(secondNumber) - parseFloat(firstNumber))
          );
          break;
        case "*":
          clear();
          setResult(
            truncNumber(parseFloat(secondNumber) * parseFloat(firstNumber))
          );
          break;
        case "/":
          clear();
          setResult(
            truncNumber(parseFloat(secondNumber) / parseFloat(firstNumber))
          );
          break;
        default:
          clear();
          setResult(0);
          break;
      }
    }
  };

  useEffect(() => {
    if (numTest.length > 0) {
      let numTmp = numTest.replace(/(\b([0-9]+%))/g, "($1)");
      numTmp = numTmp.replaceAll("%", "/100");
      numTmp = numTmp.replaceAll("÷", "/");
      numTmp = numTmp.replaceAll("×", "*");
      console.log(numTmp);
      if (!isNaN(numTmp?.slice(-1)) || numTmp?.slice(-1) === ")") {
        setTestResult(eval(numTmp));
      }
    } else {
      setTestResult("");
    }
  }, [numTest]);

  return (
    <div
      style={{
        background: theme === "light" ? "#F1F2F3" : "#22252d",
        borderRadius: "30px"
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <ThemeButton theme={themeBtn} setTheme={setThemeBtn} />
      </div>

      <div
        style={{
          height: "150px",
          display: "flex",

          justifyContent: "flex-end",
          alignSelf: "center",
          flexDirection: "column",
          padding: "10px",
          margin: "10px 0"
        }}
      >
        <p
          style={{
            ...Styles.screenFirstNumber,
            fontSize: 30
          }}
        >
          {numTest}
        </p>

        <p
          style={
            testResult.toString().length > 11 &&
            testResult.toString().length < 18
              ? {
                  ...Styles.screenFirstNumber,
                  fontSize: 40,
                  color: myColors.result
                }
              : testResult.toString().length >= 18
              ? {
                  ...Styles.screenFirstNumber,
                  fontSize: 30,
                  color: myColors.result
                }
              : {
                  ...Styles.screenFirstNumber,
                  fontSize: 50,
                  color: myColors.result
                }
          }
        >
          {testResult}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={Styles.row}>
          <Button title="C" isGray onClick={clear} />
          <Button title="7" onClick={() => handlePress("7")} />
          <Button title="4" onClick={() => handlePress("4")} />
          <Button title="1" onClick={() => handlePress("1")} />
          <Button title="％" onClick={() => handlePress("%")} />
        </div>
        <div style={Styles.row}>
          <Button title="÷" isBlue onClick={() => handlePress("÷")} />
          <Button title="8" onClick={() => handlePress("8")} />
          <Button title="5" onClick={() => handlePress("5")} />
          <Button title="2" onClick={() => handlePress("2")} />
          <Button title="0" onClick={() => handlePress("0")} />
        </div>
        <div style={Styles.row}>
          <Button title="×" isBlue onClick={() => handlePress("×")} />
          <Button title="9" onClick={() => handlePress("9")} />
          <Button title="6" onClick={() => handlePress("6")} />
          <Button title="3" onClick={() => handlePress("3")} />
          <Button title="." onClick={() => handlePress(".")} />
        </div>
        <div style={Styles.row}>
          <Button
            title="⌫"
            isGray
            onClick={() => setNumTest(numTest.slice(0, -1))}
          />

          <Button title="-" isBlue onClick={() => handlePress("-")} />
          <Button title="+" isBlue onClick={() => handlePress("+")} />
          <Button title="=" isBlue onClick={() => getResult()} />
        </div>
      </div>
    </div>
  );
};

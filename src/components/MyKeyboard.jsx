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

  const handleNumberPress = (buttonValue) => {
    if (result) {
      setResult(null);
    }
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
    setNumTest(numTest + buttonValue);
  };

  const handleOperationClick = (buttonValue) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
    setNumTest(numTest + buttonValue);
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
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

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <p
          style={
            result < 99999
              ? { ...Styles.screenFirstNumber, color: myColors.result }
              : {
                  ...Styles.screenFirstNumber,
                  fontSize: 50,
                  color: myColors.result
                }
          }
        >
          {result?.toString()}
        </p>
      );
    }
    if (firstNumber && firstNumber.length < 9) {
      return <p style={Styles.screenFirstNumber}>{firstNumber}</p>;
    }
    if (firstNumber === "") {
      return <p style={Styles.screenFirstNumber}>{"0"}</p>;
    }
    if (firstNumber.length > 8 && firstNumber.length < 12) {
      return (
        <p
          style={{
            ...Styles.screenFirstNumber,
            fontSize: 40
          }}
        >
          {firstNumber}
        </p>
      );
    }
    if (firstNumber.length > 12) {
      return (
        <p
          style={{
            ...Styles.screenFirstNumber,
            fontSize: 30
          }}
        >
          {firstNumber}
        </p>
      );
    }
  };

  useEffect(() => {
    if (numTest.length > 0) {
      if (isNaN(numTest?.slice(-1))) {
        console.log("no es", numTest, testResult);
      } else {
        setTestResult(eval(numTest));
        console.log("si es", numTest, testResult);
      }
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
                  fontSize: 30,
                  color: myColors.result
                }
              : testResult.toString().length >= 18
              ? {
                  ...Styles.screenFirstNumber,
                  fontSize: 20,
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
          <Button title="7" onClick={() => handleNumberPress("7")} />
          <Button title="4" onClick={() => handleNumberPress("4")} />
          <Button title="1" onClick={() => handleNumberPress("1")} />
          <Button title="％" onClick={() => handleOperationClick("％")} />
        </div>
        <div style={Styles.row}>
          <Button title="÷" isBlue onClick={() => handleOperationClick("/")} />
          <Button title="8" onClick={() => handleNumberPress("8")} />
          <Button title="5" onClick={() => handleNumberPress("5")} />
          <Button title="2" onClick={() => handleNumberPress("2")} />
          <Button title="0" onClick={() => handleNumberPress("0")} />
        </div>
        <div style={Styles.row}>
          <Button title="×" isBlue onClick={() => handleOperationClick("*")} />
          <Button title="9" onClick={() => handleNumberPress("9")} />
          <Button title="6" onClick={() => handleNumberPress("6")} />
          <Button title="3" onClick={() => handleNumberPress("3")} />
          <Button title="." onClick={() => handleNumberPress(".")} />
        </div>
        <div style={Styles.row}>
          <Button
            title="⌫"
            isGray
            onClick={() => setNumTest(numTest.slice(0, -1))}
          />

          <Button
            title="-"
            isBlue
            onClick={
              secondNumber
                ? () => handleOperationClick("-")
                : () => handleNumberPress("-")
            }
          />
          <Button title="+" isBlue onClick={() => handleOperationClick("+")} />
          <Button title="=" isBlue onClick={() => getResult()} />
        </div>
      </div>
    </div>
  );
};

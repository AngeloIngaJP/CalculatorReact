import { myColors } from "./colors";

export const Styles = {
  btnBlue: {
    width: 80,
    height: 80,
    display: "flex",
    cursor: "pointer",
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center"
  },
  btnDark: {
    width: 80,
    height: 80,
    display: "flex",
    cursor: "pointer",
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLight: {
    width: 80,
    height: 80,
    display: "flex",
    cursor: "pointer",
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  btnGray: {
    width: 80,
    height: 80,
    display: "flex",
    cursor: "pointer",
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center"
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  viewBottom: {
    /* position: "absolute",
    bottom: 50 */
  },
  screenFirstNumber: {
    fontSize: 50,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end"
  },
  screenSecondNumber: {
    fontSize: 30,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end"
  }
};

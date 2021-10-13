import theme from "../globalStyles/theme";

export default function getBackgroundColor(color) {
  //is the color in the const file?
  if (theme[color]?.bg) {
    //return primary theme if it is.
    let newValue = { primary: theme[color], alternate: { ...theme } };
    return newValue;
  } else {
    throw "no background color was set";
  }
}

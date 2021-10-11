import theme from "../globalStyles/theme";

export default function getBackgroundColor(color) {
  console.log(theme, theme[color]);
  if (theme[color]?.bg) {
    console.log(theme[color].bg);

    let newValue = { primary: theme[color], alternate: { ...theme } };
    console.log(newValue);
    return newValue;
  } else {
    throw "no background color was set";
  }
}

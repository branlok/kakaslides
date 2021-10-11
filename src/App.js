import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import ScreenLoader from "./components/Screens/ScreenLoader";
import SettingsModal from "./components/Settings/SettingsModal";
import theme from "./globalStyles/theme";
import getBackgroundColor from "./utils/getBackgroundColor";




function App() {
  let color = useSelector(state => state.theme.bgColor)
  //TODO:take use functional call to change the theme provider values;
  let bgHexCode = useCallback(() => getBackgroundColor(color), [color])

  return (
    <ThemeProvider theme={bgHexCode}>
      <div className="App" data-testid="App">
        <ScreenLoader />
        <SettingsModal/>
      </div>
    </ThemeProvider>
  );
}

//Settings div
//

export default App;

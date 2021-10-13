import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import LoadingScreen from "./components/LoadingSreen/LoadingScreen";
import ScreenLoader from "./components/Screens/ScreenLoader";
import SettingsModal from "./components/Settings/SettingsModal";
import theme from "./globalStyles/theme";
import getBackgroundColor from "./utils/getBackgroundColor";
import useScreenshot from "./utils/useScreenshot";

function App() {
  let color = useSelector((state) => state.theme.bgColor);
  let theme = useSelector((state) => state.theme.custom);
  const { generateImage, captureRef, status } = useScreenshot();
  //TODO:take use functional call to change the theme provider values;
  let bgHexCode = useCallback(() => getBackgroundColor(color), [color]);

  useEffect(() => {
    function resetHeight() {
      // reset the body height to that of the inner browser
      document.body.style.height = window.innerHeight + "px";
    }
    // reset the height whenever the window's resized
    window.addEventListener("resize", resetHeight);
    // called to initially set the height.
    resetHeight();
    return () => window.removeEventListener("resize", resetHeight);
  });

  return (
    <ThemeProvider theme={bgHexCode}>
      <>
        <div
          // onClick={() => generateImage(() => {}, theme.custom)}
          className="App"
          data-testid="App"
          ref={captureRef}
        >
          <ScreenLoader
            generateImage={generateImage}
            status={status}
            theme={theme}
          />
          <SettingsModal />
        </div>
      </>
      {status == "loading" && <LoadingScreen />}
    </ThemeProvider>
  );
}

//Settings div
//

export default App;

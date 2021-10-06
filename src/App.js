import { ThemeProvider } from "styled-components";
import "./App.css";
import ScreenLoader from "./components/Screens/ScreenLoader";
import SettingsModal from "./components/Settings/SettingsModal";
import theme from "./globalStyles/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
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

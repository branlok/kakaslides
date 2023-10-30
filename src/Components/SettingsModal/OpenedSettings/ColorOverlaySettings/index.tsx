
import ColorSelectors from "./ColorSelectors";
import MixBlendModeSelector from "./MixBlendModeSelector";
import "./styles.css";
function index() {
    return (
        <div className="setting-module color-overlay-settings ">
            <ColorSelectors />
            <MixBlendModeSelector />
        </div>
    )
}




export default index

import ColorOverlaySettings from "./ColorOverlaySettings";
import LayerControl from "./LayerControl";
import SelectorForm from "./SelectorForm";
import BackgroundMotionSetting from "./SelectorForm/BackgroundMotion";
import BlackBarCustomizer from "./SelectorForm/BlackBarCustomizer";
import TextMotionSetting from "./SelectorForm/TextMotion";
import "./styles.css";
function index({ handleCloseSettings }) {
    return (
        <div className="opened-settings">
            {/* <button onClick={handleCloseSettings}>Close</button> */}
            <h1 className="settings-title">Customize Scene</h1>
            {/* Holds Setting Groups */}
            <ColorOverlaySettings />
            <LayerControl layerName="Top Layer" />
            <LayerControl layerName="Bottom Layer" />
            <SelectorForm layerName="Background Motion">
                <BackgroundMotionSetting />
            </SelectorForm>
            <SelectorForm layerName="Text Motion">
                <TextMotionSetting />
            </SelectorForm>
            <SelectorForm layerName="Blackbar Customizer">
                <BlackBarCustomizer />
            </SelectorForm>
        </div>
    )
}




export default index
import React from "react";
import useBlackbarSettings from "../../store/slices/slideModifications";
import "./styles.css"
import useMediaStore from "../../store/slices/mediaStore";
import ColorSelector from "./ColorSelectors";
import MixBlendModeSelector from "./MixBlendModeSelector";
import UploadImageButton from "./UploadImageButton";
import DownloadButton from "./DownloadButton";
import IntensitySelector from "./IntensitySelector";
import BackgroundMotionSetting from "./BackgroundMotionSetting";
import TextMotionSetting from "./TextMotionSetting";
type Props = {}

function SettingsModal({ }: Props) {

    const toggleBlackBar = useBlackbarSettings(state => state.toggleBlackBar);
    const adjustHeight = useBlackbarSettings(state => state.adjustHeight);
    const setBlendMode = useBlackbarSettings(state => state.setBlendMode);
    const intensity = useBlackbarSettings(state => state.intensity);
    const setIntensity = useBlackbarSettings(state => state.setIntensity);
    let MIXBLENDS = ["normal", "multiply", "hardlight", "difference", "color-burn", "screen", "overlay"];
    let PRESETCOLOURS = ["red", "orange", "blue"];
    return (
        <div className={"setting-window"}>
            <div className="branding">kakaslides</div>
            <div className="content">
                {/* color picker */}
                <aside className="toolbar-wrapper">
                    <h1>Settings</h1>
                    <button className="close-btn">X</button>
                </aside>
                <div className="mood-wrapper">
                    <div className="top-wrapper">
                        <ColorSelector />
                        <MixBlendModeSelector />
                    </div>
                    <div className="top-wrapper">
                        <IntensitySelector />
                    </div>
                    <div className="top-wrapper">
                        <DownloadButton />
                        <UploadImageButton position="topImage" />
                        <UploadImageButton position="bottomImage" />
                    </div>
                    <div className="vertical-wrapper">
                        <h1 className="setting-title">Background Motion</h1>
                        <BackgroundMotionSetting />
                    </div>
                    <div className="vertical-wrapper">
                        <h1 className="setting-title">Text Motion</h1>
                        <TextMotionSetting />
                    </div>
                </div>

            </div>
        </div >
    )
}

function FileUpload() {
    let ref = React.useRef<HTMLElement>(null);
    let setLocalImage = useMediaStore(state => state.setLocalImage);

    return <input type="file" name="" id="" onChange={(e) => {
        // access the uploaded image file and generate URL
        console.log(e.currentTarget.files, 'wat')
        const image = e.currentTarget.files[0];
        // save file as objectUrl
        const BGURL = URL.createObjectURL(image);
        console.log(BGURL, 'what')
        setLocalImage(BGURL);
    }} />
}

export default SettingsModal
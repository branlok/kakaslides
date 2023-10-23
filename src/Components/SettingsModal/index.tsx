import React from "react";
import kakaGlobalState from "../../store/slices/slideModifications";
import "./styles.css"
import useMediaStore from "../../store/slices/mediaStore";
import ColorSelector from "./ColorSelectors";
import MixBlendModeSelector from "./MixBlendModeSelector";
import UploadImageButton from "./UploadImageButton";
import DownloadButton from "./DownloadButton";
import IntensitySelector from "./IntensitySelector";
import BackgroundMotionSetting from "./BackgroundMotionSetting";
import TextMotionSetting from "./TextMotionSetting";
import cross from "../../assets/cross.svg";
import ShowWindowSize from "./ShowWindowSize/ShowWindowSize";
type Props = {}

function SettingsModal({ }: Props) {

    const toggleBlackBar = kakaGlobalState(state => state.toggleBlackBar);
    const adjustHeight = kakaGlobalState(state => state.adjustHeight);
    const setBlendMode = kakaGlobalState(state => state.setBlendMode);
    const intensity = kakaGlobalState(state => state.intensity);
    const setIntensity = kakaGlobalState(state => state.setIntensity);
    let MIXBLENDS = ["normal", "multiply", "hardlight", "difference", "color-burn", "screen", "overlay"];
    let PRESETCOLOURS = ["red", "orange", "blue"];
    const [mouseOver, onMouseOver] = React.useState(false);
    const [hide, setHide] = React.useState(true);
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }


    if (hide) return <div className={`setting-collapsed  ${mouseOver ? "mouse-over" : ""}`}>
        <button onClick={() => toggleFullScreen()}>Full Screen</button>
        <DownloadButton />
        <button onClick={() => setHide(false)}>Customize</button>
        {/* <ShowWindowSize /> */}
    </div>

    return (
        <div className={`setting-window ${mouseOver ? "mouse-over" : ""}`} onMouseOver={() => {
            onMouseOver(true);
        }}
            onMouseLeave={() => {
                onMouseOver(false)
            }}
        >
            <div className="branding">kakaslides</div>
            <div className="content">
                {/* color picker */}
                <aside className="toolbar-wrapper">
                    <h1>Settings</h1>
                    <button className="close-btn" onClick={() => setHide(true)}><span>Hide</span><img src={cross} /></button>
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
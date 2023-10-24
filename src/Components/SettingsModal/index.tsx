import React from "react";
import "./styles.css"
import ColorSelector from "./ColorSelectors";
import MixBlendModeSelector from "./MixBlendModeSelector";
import UploadImageButton from "./UploadImageButton";
import DownloadButton from "./DownloadButton";
import IntensitySelector from "./IntensitySelector";
import BackgroundMotionSetting from "./BackgroundMotionSetting";
import TextMotionSetting from "./TextMotionSetting";
import cross from "../../assets/Cross.svg";


function SettingsModal() {
    const [mouseOver, onMouseOver] = React.useState(false);
    const [hide, setHide] = React.useState(true);
    const [toggledInfo, setToggledInfo] = React.useState(false);
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
    </div>

    return (
        <div className={`setting-window ${mouseOver ? "mouse-over" : ""}`} onMouseOver={() => {
            onMouseOver(true);
        }}
            onMouseLeave={() => {
                onMouseOver(false)
            }}
        >
            <div className="branding" onClick={() => setToggledInfo(prev => !prev)}>kakaslides 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</div>
            <div className={`behind ${toggledInfo ? "behind-show" : ""}`}>
                bruh
            </div>
            <div className={`content ${toggledInfo ? "content-hide" : ""}`}>
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

export default SettingsModal
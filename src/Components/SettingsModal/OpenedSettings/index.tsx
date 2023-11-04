
import { useEffect, useState } from "react";
import ColorOverlaySettings from "./ColorOverlaySettings";
import LayerControl from "./LayerControl";
import SelectorForm from "./SelectorForm";
import BackgroundMotionSetting from "./SelectorForm/BackgroundMotion";
import BlackBarCustomizer from "./SelectorForm/BlackBarCustomizer";
import TextMotionSetting from "./SelectorForm/TextMotion";
import * as htmlToImage from "html-to-image";
import Close from "../../../assets/Close.svg"

import "./styles.css";
import InfoAndExternalLinks from "./InfoAndExternalLinks";
import AlternativeLayout from "./SelectorForm/AlternativeLayout";
import Presets from "./Presets";
function index({ handleCloseSettings }) {
    let [saving, setSaving] = useState(false);
    const handleSaveSlide = () => {
        setSaving(true);
        let targetNode = document.querySelector('.slide-container');
        targetNode?.classList.add('saving');
        setTimeout(() => {
            htmlToImage.toPng(targetNode).then(function () {
                htmlToImage.toPng(targetNode).then(function () {
                    htmlToImage.toPng(targetNode, { cacheBust: true }).then(function () {
                        htmlToImage.toPng(targetNode, { cacheBust: true }).then(function (dataURL2) {
                            const link = document.createElement("a");
                            // allow name edit next time
                            link.download = "slide";
                            link.href = dataURL2;
                            link.click();
                            targetNode?.classList.remove('saving');
                            setSaving(false);
                            return dataURL2;
                        })
                    })
                })
            })
        }, 200)
    }

    useEffect(() => {
        // listen for exit to collapse settings
        const handleEsc = (e) => {
            if (e.key == "Escape") {
                handleCloseSettings();
            }
        }
        document.body.addEventListener('keydown', handleEsc)

        return () => {
            document.body.removeEventListener('keydown', handleEsc);
        }
    }, [])

    return (
        <>
            <div className="branding-nav">KakaSlide</div>
            <div className="opened-settings" data-disabled={saving}>
                <h1 className="settings-title"><div className="cta-wrapper">   <button className="close-button" onClick={handleCloseSettings}><img src={Close} alt="" /></button><button className="export-button" disabled={saving} onClick={handleSaveSlide}> {saving ? "Saving" : "Export"} </button></div> Customize Scene</h1>
                {/* Holds Setting Groups */}
                <ColorOverlaySettings />
                <SelectorForm layerName="Presets">
                    <Presets />
                </SelectorForm>
                <LayerControl layerName="Top Layer" />
                <LayerControl layerName="Bottom Layer" />
                <hr />
                <SelectorForm layerName="Background Motion">
                    <BackgroundMotionSetting />
                </SelectorForm>
                <SelectorForm layerName="Text Motion">
                    <TextMotionSetting />
                </SelectorForm>
                <SelectorForm layerName="Blackbar Customizer">
                    <BlackBarCustomizer />
                </SelectorForm>
                <SelectorForm layerName="Alternative Layout">
                    <AlternativeLayout />
                </SelectorForm>
                <InfoAndExternalLinks />
            </div >
        </>
    )
}




export default index
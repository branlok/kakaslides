import React from 'react'
import './styles.css';
import kakaGlobalState from '../../../../../store/slices/slideModifications';

const BLENDMODE_DESCRIPTIONS = {
    normal: "The default blend mode, where the top layer completely covers the bottom layer.",
    multiply: "Multiplies the colors of the top and bottom layers, resulting in a darker image.",
    screen: "Inverts and multiplies the colors, creating a lighter image with strong highlights.",
    overlay: "Combines multiply and screen modes to increase contrast and saturation.",
    darken: "Selects the darker of the two colors for each pixel.",
    lighten: "Selects the lighter of the two colors for each pixel.",
    "colordodge": "Brightens the bottom layer based on the top layer's colors.",
    "color-burn": "Darkens the bottom layer based on the top layer's colors.",
    "hardlight": "A combination of overlay and screen modes, creating a high-contrast effect.",
    "softlight": "A softer version of hard-light, with subtle contrast and color effects.",
    difference: "Calculates the absolute difference between the top and bottom layer colors.",
    exclusion: "Similar to difference but with a lower-contrast result.",
    hue: "Applies the hue of the top layer to the bottom layer.",
    saturation: "Applies the saturation of the top layer to the bottom layer.",
    color: "Applies the color (both hue and saturation) of the top layer to the bottom layer.",
    luminosity: "Applies the luminance of the top layer to the bottom layer, affecting brightness."
};


type Props = {}

function MixBlendModeSelector() {

    const setBlendMode = kakaGlobalState((state) => state.setBlendMode);
    const blendMode = kakaGlobalState((state) => state.blendMode);
    const MIXBLENDS = ["normal", "multiply", "hardlight", "difference", "color-burn", "screen", "overlay"];
    return (
        <div className="mix-blend">
            <select name="" id="" defaultValue={blendMode} onChange={(e) => {
                setBlendMode(e.currentTarget.value)
            }}>
                {MIXBLENDS.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
            <div className="mix-mode-description-wrapper">
                <p>{BLENDMODE_DESCRIPTIONS[blendMode]}</p>
            </div>
        </div>
    )
}

export default MixBlendModeSelector
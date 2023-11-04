import useMediaStore from '../../../../store/slices/mediaStore'
import foregroundBooks from '../../../../assets/minimalbg/books_sideb.png'
import backgroundBooks from '../../../../assets/minimalbg/books_a_shadow.png'

import araragi from '../../../../assets/minimalbg/araragi.png'
import kissshot from '../../../../assets/minimalbg/kissshot.png'

import donut from '../../../../assets/minimalbg/donut02.png'
import texture from '../../../../assets/minimalbg/patternPlain.png'

import kakaGlobalState from '../../../../store/slices/slideModifications'
import classes from './styles.module.css';
import { useState } from 'react';
type Props = {}
const PRESET_A = {
    topLayer: {
        imageURL: foregroundBooks,
        blendMode: 'normal',
        scale: '120%',
        noAnimation: true
    },
    bottomLayer: {
        imageURL: backgroundBooks,
        blendMode: 'normal',
        scale: '120%',
        noAnimation: true
    },
    backgroundMotion: 'Track Cursor'
}

const PRESET_B = {
    topLayer: {
        imageURL: araragi,
        blendMode: 'screen',
        scale: 'cover',
        noAnimation: true
    },
    bottomLayer: {
        imageURL: kissshot,
        blendMode: 'screen',
        scale: 'cover',
        noAnimation: true
    },
    backgroundMotion: 'Off'
}

const PRESET_C = {
    topLayer: {
        imageURL: texture,
        blendMode: 'darken',
        scale: '120%',
        noAnimation: false
    },
    bottomLayer: {
        imageURL: donut,
        blendMode: 'screen',
        scale: '120%',
        noAnimation: false
    },
    backgroundMotion: 'Sliding'
}



const AVALIABLE_PRESETS = {
    PRESET_A,
    PRESET_B,
    PRESET_C
}

function index({ }: Props) {

    let setImage = useMediaStore(state => state.setImage);
    let setImageZoom = useMediaStore(state => state.setImageZoom);
    let setNewBlendMode = useMediaStore(state => state.setNewBlendMode)
    let setImageSettings = useMediaStore(state => state.setImageSettings)
    let setBackgroundMotion = kakaGlobalState(state => state.setBackgroundMotion);
    let [selected, setSelected] = useState(null);


    const handleSwitchPreset = (presetStyle: "PRESET_A") => {
        return () => {
            const topLayer = AVALIABLE_PRESETS[presetStyle].topLayer;
            const bottomLayer = AVALIABLE_PRESETS[presetStyle].bottomLayer;
            setImage(topLayer.imageURL, 'topImage');
            setImage(bottomLayer.imageURL, 'bottomImage');
            setImageZoom(topLayer.scale, 'topImage');
            setImageZoom(bottomLayer.scale, 'bottomImage');
            setImageSettings(topLayer.noAnimation, 'topImage', 'noAnimation');
            setImageSettings(topLayer.noAnimation, 'bottomImage', 'noAnimation');
            setNewBlendMode(topLayer.blendMode, 'topImage');
            setNewBlendMode(bottomLayer.blendMode, 'bottomImage');
            setBackgroundMotion(AVALIABLE_PRESETS[presetStyle].backgroundMotion);
            setSelected(presetStyle);
        }
    }

    return (
        <div className={classes.wrapper}>
            <button className={classes.button} data-selected={selected === "PRESET_A"} onClick={handleSwitchPreset('PRESET_A')}>Parallax</button>
            <button className={classes.button} data-selected={selected === "PRESET_B"} onClick={handleSwitchPreset('PRESET_B')}>Static</button>
            <button className={classes.button} data-selected={selected === "PRESET_C"} onClick={handleSwitchPreset('PRESET_C')}>Slider</button>
        </div>
    )
}

export default index
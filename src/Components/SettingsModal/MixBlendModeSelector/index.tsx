import React from 'react'
import './styles.css';
import kakaGlobalState from '../../../store/slices/slideModifications';
type Props = {}

function MixBlendModeSelector({ }: Props) {

    let setBlendMode = kakaGlobalState((state) => state.setBlendMode);
    let blendMode = kakaGlobalState((state) => state.blendMode);
    let MIXBLENDS = ["normal", "multiply", "hardlight", "difference", "color-burn", "screen", "overlay"];
    return (
        <div className="mix-blend">
            <select name="" id="" defaultValue={blendMode} onChange={(e) => {
                setBlendMode(e.currentTarget.value)
            }}>
                {MIXBLENDS.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default MixBlendModeSelector
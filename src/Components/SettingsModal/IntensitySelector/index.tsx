import React from 'react'
import './styles.css';
import useBlackbarSettings from '../../../store/slices/slideModifications';
type Props = {}

function IntensitySelector({ }: Props) {
    let setIntensity = useBlackbarSettings((state) => state.setIntensity);
    let intensity = useBlackbarSettings((state) => state.intensity);
    return (
        <div className="intensity-blend">
            <label htmlFor="">Blend Intensity</label>
            <input type="range" value={intensity} min="0" max="100" onChange={e => { setIntensity(e.currentTarget.value); e.currentTarget.style.setProperty("--rotate", `rotate(${3.6 * intensity}deg)`); }}></input>
        </div>
    )
}

export default IntensitySelector
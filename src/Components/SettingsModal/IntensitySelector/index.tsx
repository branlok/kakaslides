
import './styles.css';
import kakaGlobalState from '../../../store/slices/slideModifications';


function IntensitySelector() {
    const setIntensity = kakaGlobalState((state) => state.setIntensity);
    const intensity = kakaGlobalState((state) => state.intensity);
    return (
        <div className="intensity-blend">
            <label htmlFor="">Blend Intensity</label>
            <input type="range" value={intensity} min="0" max="100" onChange={e => { setIntensity(e.currentTarget.value); e.currentTarget.style.setProperty("--rotate", `rotate(${3.6 * intensity}deg)`); }}></input>
        </div>
    )
}

export default IntensitySelector
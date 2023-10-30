
import kakaGlobalState from '../../../../../store/slices/slideModifications';
import './styles.css';
//https://gist.github.com/daxburatto/307e8365c41fd5401f9ac315676490bf 
const HexRegExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
function BackgroundMotionSetting() {

    const setBlackbarHeight = kakaGlobalState(state => state.setBlackbarHeight);
    const setBlackbarColor = kakaGlobalState(state => state.setBlackbarColor);
    const backgroundColor = kakaGlobalState(state => state.blackBarsVisual.backgroundColor);
    const height = kakaGlobalState(state => state.blackBarsVisual.height);

    const handleHexColorchange = (e) => {
        e.preventDefault();
        let value = e.currentTarget.value;
        // if malformat use last correctly formatted color
        if (HexRegExp.test(value)) {
            console.log('we working?', value)
            setBlackbarColor(value);
        }
    }

    const handleBlackbarHeight = (e) => {
        e.preventDefault();
        let value = e.currentTarget.value;
        setBlackbarHeight(value);
    }

    return (
        <div className="choice-wrapper black-bar-customizer-wrapper">
            {/* blackbar colorpicker */}
            <div className="hex-input-wrapper">
                <div className="hex-color-preview" style={{ backgroundColor }}></div>
                <input className="hex-color-input" onChange={handleHexColorchange} type="text" id="hex_code" name="hex_code" title="in valid hex code" placeholder={"#000000"} />
            </div>
            <div className="bar-height-wrapper">
                <label htmlFor="">Height {height}px</label>
                <input type="range" value={height} onChange={handleBlackbarHeight} min="0" max="200"></input>
            </div>
        </div >
    )
}

export default BackgroundMotionSetting
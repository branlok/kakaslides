
import kakaGlobalState from '../../../../../store/slices/slideModifications';
import './styles.css';

function BackgroundMotionSetting() {

    const backgroundMotion = kakaGlobalState(state => state.backgroundMotion);
    const setbackgroundMotion = kakaGlobalState(state => state.setBackgroundMotion);
    const changeBackgroundSetting = (e) => {
        const val = e.currentTarget.value;
        setbackgroundMotion(val);
    }
    return (
        <div className="choice-wrapper">
            {["Sliding", "Track Cursor", "Off"].map(item => (<div key={item}>
                <label data-selected={backgroundMotion === item ? "true" : "false"} className="label-button" htmlFor={item} style={{ backgroundColor: item }}>
                    {item}
                    <input type="radio" name="background-motion" value={item} onClick={changeBackgroundSetting}></input></label>
            </div>))
            }
        </div >
    )
}

export default BackgroundMotionSetting
import useBlackbarSettings from '../../../store/slices/slideModifications';
import './styles.css';
type Props = {}

function BackgroundMotionSetting({ }: Props) {

    let backgroundMotion = useBlackbarSettings(state => state.backgroundMotion);
    let setbackgroundMotion = useBlackbarSettings(state => state.setBackgroundMotion);
    const changeBackgroundSetting = (e) => {
        let val = e.currentTarget.value;
        setbackgroundMotion(val);
    }
    return (
        <div className="choice-wrapper">
            {["Sliding", "Mouse Tracking", "Off"].map(item => (<div key={item}>
                <label data-selected={backgroundMotion === item ? "true" : "false"} className="label-button" htmlFor={item} style={{ backgroundColor: item }}>
                    {item}
                    <input type="radio" name="background-motion" value={item} onClick={changeBackgroundSetting}></input></label>
            </div>))
            }
        </div >
    )
}

export default BackgroundMotionSetting
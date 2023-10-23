import kakaGlobalState from '../../../store/slices/slideModifications';
import './styles.css';
type Props = {}

function TextMotionSetting({ }: Props) {

    let textMotion = kakaGlobalState(state => state.textMotion);
    let setTextMotion = kakaGlobalState(state => state.setTextMotion);
    const changeBackgroundSetting = (e) => {
        let val = e.currentTarget.value;
        setTextMotion(val);
    }
    return (
        <div className="choice-wrapper">
            {["None", "Fast", "Slow"].map(item => (<div key={item}>
                <label data-selected={textMotion === item ? "true" : "false"} className="label-button" htmlFor={item} style={{ backgroundColor: item }}>
                    {item}
                    <input type="radio" name="text-motion" value={item} onClick={changeBackgroundSetting}></input></label>
            </div>))
            }
        </div >
    )
}

export default TextMotionSetting

import layoutStore from '../../../../../store/slices/layoutStore';

import './styles.css';

function BackgroundMotionSetting() {

    const setLayout = layoutStore(state => state.setLayout);
    const layout = layoutStore(state => state.layout);
    return (
        <div className="choice-wrapper">
            {["Default", "Identity", "Excerpt"].map(item => (<div key={item}>
                <label data-selected={layout === item.toLocaleLowerCase() ? "true" : "false"} className="label-button" htmlFor={item} style={{ backgroundColor: item }}>
                    {item}
                    <input type="radio" name="background-motion" value={item} onClick={(e) => { let result = confirm('your work will reset, do you wish to continue?'); if (!result) { return } setLayout(e.currentTarget.value.toLocaleLowerCase()); window.history.replaceState(null, null, e.currentTarget.value.toLocaleLowerCase()); }}></input></label>
            </div>))
            }
        </div >
    )
}

export default BackgroundMotionSetting
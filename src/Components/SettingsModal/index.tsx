import useBlackbarSettings from "../../store/slices/slideModifications";

import "./styles.css"

type Props = {}

function SettingsModal({ }: Props) {

    const toggleBlackBar = useBlackbarSettings(state => state.toggleBlackBar);
    const adjustHeight = useBlackbarSettings(state => state.adjustHeight);
    console.log('hmm')
    return (
        <div className={"setting-window"}>
            <button onClick={(e) => {
                e.preventDefault();
                toggleBlackBar()
            }}>Toggle blackbars</button>
            <input type="number" defaultValue={10} onChange={(e) => {
                console.log(e.target.value)
                adjustHeight(e.target.value);
            }} />
        </div>
    )
}

export default SettingsModal
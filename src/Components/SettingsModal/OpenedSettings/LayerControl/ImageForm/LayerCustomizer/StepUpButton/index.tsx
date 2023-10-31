
import { useState } from 'react';
import useMediaStore from '../../../../../../../store/slices/mediaStore';

type Props = {}


function index({ position, stepsMapto = ['25%', '50%', '120%', '200%', '300%'] }) {
    const setImageZoom = useMediaStore(state => state.setImageZoom);
    const currentZoom = useMediaStore(state => state[position + "Zoom"]);
    const [step, setStep] = useState(stepsMapto.indexOf(currentZoom));

    return (
        <button className="toggle-button" data-step-level={step % 5} onClick={() => {
            setStep(prev => ++prev);
            setImageZoom(stepsMapto[(step + 1) % 5], position);
        }}>
            <span>Scale | {stepsMapto[step % 5]} </span>
        </button>
    )
}

export default index
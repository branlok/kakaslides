
import useMediaStore from '../../../../../../../store/slices/mediaStore';

type Props = {}


function index({ position }) {
    const stepsMapto = ['25%', '50%', '120%', '200%', '300%', 'cover'];
    const setImageZoom = useMediaStore(state => state.setImageZoom);
    const currentZoom = useMediaStore(state => state[position + "Zoom"]);
    // const [step, setStep] = useState(stepsMapto.indexOf(currentZoom));
    const step = stepsMapto.indexOf(currentZoom);
    return (
        <button className="toggle-button" data-step-level={step % 6} onClick={() => {
            // setStep(prev => ++prev);
            setImageZoom(stepsMapto[(step + 1) % 6], position);
        }}>
            <span>Scale | {stepsMapto[step % 6]} </span>
        </button>
    )
}

export default index
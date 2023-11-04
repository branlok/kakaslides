import './styles.css';
type Props = {}

function index({ onSelect }) {
    const colors = ['white', 'black', '#FFC857', '#E9724C', '#C5283D', '#481D24', '#255F85', 'brown'];
    return (
        <div className="color-palette">
            {colors.map(item => {
                return <div className={'color'} style={{ backgroundColor: item }} onClick={() => {
                    onSelect(item)
                }}></div>
            })}
        </div>
    )
}

export default index
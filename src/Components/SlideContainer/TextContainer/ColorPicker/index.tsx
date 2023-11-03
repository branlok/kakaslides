import './styles.css';
type Props = {}

function index({ onSelect }) {
    const colors = ['white', 'black', 'orange', 'red', 'blue', 'green', 'purple', 'brown'];
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
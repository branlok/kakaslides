


import "./styles.css";
// Switch state between 'Request for Image' and 'Configure Image'
function index() {
    return (
        <div className="request-form">
            <button>Drag and Drop Image Here</button>
            <p>or pick from the storage</p>
            <div>
                <img src="https://placehold.co/150x100" alt="" />
                <img src="https://placehold.co/100" alt="" />
                <img src="https://placehold.co/100" alt="" />
                <img src="https://placehold.co/100" alt="" />
            </div>
        </div>
    )
}




export default index
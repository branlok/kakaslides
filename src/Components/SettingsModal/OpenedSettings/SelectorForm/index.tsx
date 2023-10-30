

import "./styles.css";

function index({ layerName = "Background Motion", children }) {


    return (
        <div className="setting-module inline-control-settings">
            <h1 className="inline-setting-title">{layerName}</h1>
            {children}
        </div>
    )
}




export default index
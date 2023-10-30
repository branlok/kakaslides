

import ImageForm from "./ImageForm";
import "./styles.css";
function index({ layerName = "Top Layer" }) {
    return (
        <div className="setting-module layer-control-settings">
            <header><h1>{layerName}</h1></header>
            <ImageForm />
        </div>
    )
}




export default index
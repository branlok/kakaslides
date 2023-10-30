

import { useState } from "react";
import "./styles.css";
import RequestForm from "./RequestForm";
// Switch state between 'Request for Image' and 'Configure Image'
function index() {
    let [page, setPage] = useState<"requesting" | "readyCustomization">('requesting')

    let WizardStage;

    switch (page) {
        case "requesting":
            WizardStage = RequestForm;
            break;
    }

    return (
        <div className="image-form">
            {page === "requesting" ? <WizardStage /> : <div>Nah</div>}
        </div>
    )
}




export default index
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowMinimize} from "@fortawesome/free-solid-svg-icons";
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";



const Bar = (()=>{
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-between p-1"
            style={{
                background : "grey"
            }}>
            <span className="fw-bold">Calculadora</span>
            <div>
                <span className="m-2"><FontAwesomeIcon icon={faWindowMinimize}/></span>
                <span className="m-2"><FontAwesomeIcon icon={faWindowMaximize}/></span>
                <span className=""><FontAwesomeIcon icon={faWindowClose}/></span>
            </div>
            
        </div>
        </div>
        
    )
});


export default Bar;
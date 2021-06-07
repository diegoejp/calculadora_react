import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faHistory} from "@fortawesome/free-solid-svg-icons";


const Tipo = (()=>{
    return(
        
        <div className="row d-flex justify-content-between p-1" 
        style={{
            background : "grey"
        }}>
            <div className="col-6">
                <span >Estándar</span>
                <span className="m-1"><FontAwesomeIcon icon={faBars}/></span>
            </div>
            <span className="col-6 text-end"><FontAwesomeIcon icon={faHistory}/></span>
        </div>

    );
});


export default Tipo;
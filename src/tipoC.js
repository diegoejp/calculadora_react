import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faHistory} from "@fortawesome/free-solid-svg-icons";


const Tipo = (()=>{
    return(
        
        <div>
            <span><FontAwesomeIcon icon={faBars}/></span>
            <span>Estándar</span>
            <div>
                <span><FontAwesomeIcon icon={faHistory}/></span>
            </div>
        </div>

    );
});


export default Tipo;
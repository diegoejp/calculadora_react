import PropTypes from 'prop-types';
import Input from './Input';
import Bar from "./windowsBar";
import Tipo from "./tipoC"


const App = ({ name }) => {
    return (
        <>
       <Bar/>
       <Tipo/>     
        </>
    )
}



App.propTypes = {
    name: PropTypes.string
}

export default App;
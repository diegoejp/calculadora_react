// import css from "./output.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Output = (()=>{
    return (
        <div className="row" >
            <input className="expand" type="text" 
            style={{
                width : "100%",
                height : "50px",
                fontSize : "30px",
                textAlingn : "right",
                color : "transparent",
                textShadow: "0 0 0 black",
                border : "none",
                paddingTop : "40px",
                paddingBottom : "40px"
            }}
            dir = "rtl"
            placeholder = "0"></input>
        </div>
    )
});

export default Output;
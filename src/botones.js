import Fila from "./FilaBotones";

let comandos = ["%","CE","C","borrar","1/X","x**2","raiz","/",7,8,9,"X",4,5,6,"-",1,2,3,"+","+/-",0,",","="];

const Botones = (()=>{
    return(
        <div className="row">{
        comandos.map((item)=>{
            return(
                
                  <div className="col-3 text-center p-2" style={{
                    border : "1px solid black",
                    background : "grey"
                }}>{item}</div>  
                
            )
        })}
        </div>
    )
});



 
export default Botones;
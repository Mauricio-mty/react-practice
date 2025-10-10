import React from 'react';
import Button from './components/Button';

function App(){
/*  const handleClick=()=>{
    alert("Hacer click");
  };
*/   
  return(
    <div style={{padding:"40px",display:"flex",flexDirection:"column",gap:"20px"}} >
        <h1>Mi primer boton de React probando</h1>
        
        <Button text="Primario" variant="primary" onClick={()=>{alert("click primario")}}/>
        <Button text="Secundario" variant="secondary" onClick={()=>{alert("click secundario")}}/>          
        <Button text="Peligro" variant="danger" onClick={()=>{alert("click peligro")}}/>
        <Button text="Deshabilitado" disabled/>
        
        <Button text="con icon" variant="primary" icon={<span>🎷</span>}/>

    </div>  
  )

}
export default App

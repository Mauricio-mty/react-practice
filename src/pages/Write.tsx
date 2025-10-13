import React,{useState} from "react";
import Input from "../components/Input";

const Write: React.FC=()=>{

   const [name,setName]=useState('');

    const handleNameChange=(event)=>{
        setName(event.target.value);
        console.log('real time value',)
    };

    return(
        <div
            style={{
               padding:"60px",
                display:"flex",
                flexDirection:"column",
                gap:"20px",    
            }}
        >
            <h1 style={{fontSize:"2rem",fontWeight:"bold"}}>
                Write page 
            </h1>
            <Input 
                type="password" 
                value={name} 
                label="Nombre" 
                name="ingreso" 
                placeholder="ffff" 
                onChange={handleNameChange}
            />

        </div>
    );
};

export default Write;
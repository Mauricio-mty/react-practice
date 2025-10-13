import React,{useState} from "react";
import Input from "../components/Input";
import CheckBox from "../components/checkBox";

const Write: React.FC=()=>{

   const [name,setName]=useState('');
   const [check,setCheck]=useState(false);

    const handleNameChange=(event)=>{
        setName(event.target.value);
        console.log('real time value',)
    };

    const habldeCheckChange=(event)=>{
        setCheck(event.target.checked);
    }

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
            <CheckBox
                name="terms"
                label="Acetp de terms"
                onChange={habldeCheckChange}
                checked={check}            
            />

        </div>
    );
};

export default Write;
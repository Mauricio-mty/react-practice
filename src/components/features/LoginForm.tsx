import {React,useState} from "react";
import Input from "../Input";
import Button from "../Button";


const LoginForm: React.FC = () => {

    const [credentials,setCredentials]=useState({mail:'',password:''});

    const handleCredentialChange=(event)=>{
        const{name,value}=event.target;
        setCredentials(prevState=>({
            ...prevState,
            [name]:value
     
        }));
    };

    const handleClick=()=>{
        alert("Login");
    };

    return(

        <form>
            <Input 
                type="email"
                value={credentials.mail}
                label="Email"
                name="correo"
                placeholder=""
                onChange={handleCredentialChange}  
            />
            <Input
                
                type="password"
                value={credentials.password}
                label="Passwrod"
                name="clave"
                placeholder=""
                onChange={handleCredentialChange}
            />
            <Button text="Bienvenido" variant="primary" onClick={handleClick} />
        </form>

    );
};

export default LoginForm;
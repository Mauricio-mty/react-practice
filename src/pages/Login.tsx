import React from "react";
import LoginForm from "../components/features/LoginForm";


const Login:React.FC=()=>{
    return(
        <div>
            <h2>Login Area</h2>
            <LoginForm/>
            <p>No tienes cuenta?<a href="">Registarse</a></p>
        </div>
    );
};

export default Login;
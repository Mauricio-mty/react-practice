import React from "react";
import Button from "../components/Button";

const Home: React.FC=()=>{
    const handleClick=()=>{
        alert("Fir page home");
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
                Home page 
            </h1>
            <p style={{fontSize:"1.1rem"}}>
                Este es el home page de la interfaz.Se agrega texto,forms,botones o cualquier componente que se muestre
            </p>
            <Button text="Bienvenido" variant="secondary"/>
        </div>
    );
};

export default Home;
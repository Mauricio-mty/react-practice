import React from 'react';

//definiendo variantes del button
type Variant = "primary"|"secondary"|"danger";

//propiedades que el button puede recibir
interface ButtonProps{
    text: string;
    onClick?: ()=> void;
    variant?: Variant;//tipo de botón
    disabled?: boolean;
    icon?: React.ReactNode //icono opcional can be <svg>
    color?: string;
}


const Button: React.FC<ButtonProps>=({
    text,
    onClick,
   // color="#007bff",
    variant="primary",
    disabled=false,
    icon,

})=>{
    const getColor=()=>{
        switch(variant){
            case"secondary":
                return "#6c757d";
        
            case "danger":
                return "#dc3545";
            default:
                return "#007bff";//primary     
            }
    }

    return(
        <button
           onClick={onClick}
           disabled={disabled}
           style={{
                backgroundColor: disabled ? "#aaa" : getColor(),
                color: "white",
                padding: "8px 14px",  // un poco más pequeño
                border: "none",
                borderRadius: "8px",
                cursor: disabled ? "not-allowed" : "pointer",
                fontSize: "14px",     // más pequeño
                fontWeight: "bold",
                display: "inline-flex", // 👈 CAMBIO CLAVE
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",   // 👈 CAMBIO CLAVE
                gap: "6px",
                transition: "transform 0.15s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e)=>{
                if(!disabled)e.currentTarget.style.transform="scale(1.05";
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform="scale(1)";
            }}
        >   
            {icon&&<span>{icon}</span>}
            {text}
        </button>
    );
};

export default Button;


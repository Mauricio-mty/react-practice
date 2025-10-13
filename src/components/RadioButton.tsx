import React from "react";


interface Option{
    value:string;
    label:string;
}

interface SelectProps{
    label?:string;
    name?:string;
    value:string;
    options:Option[];
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void;
}

const RadioButton: React.FC<SelectProps>=({
    label,
    onChange,
    value,
    options,
    name,
})=>{
     
    return(
        <div>
            {label&&<label htmlFor="{name">{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option)=>(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RadioButton;
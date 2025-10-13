import React from "react";


interface CheckBoxProps{
    checked: boolean,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    label?: string;
    name?:string;
    disabled?:boolean;

}

const CheckBox: React.FC<CheckBoxProps>=({
    checked,
    onChange,
    label,
    name,
    disabled=false,
})=>{

    return(
        <label>
            <input 
                type="checkbox"
                checked={checked}
                name={name}
                disabled={disabled}
                onChange={onChange}
            />
            {label}
        </label>

    );
};

export default CheckBox;
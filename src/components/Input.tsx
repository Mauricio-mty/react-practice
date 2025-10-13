import React from 'react';

type TypeText = "text"|"password"|"email"|"number";

interface InputProps{
    label?: string;
    type?:TypeText;
    value:string;
    placeholder?:string;
    name?:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input: React.FC<InputProps>=({
  label,
  type="text",
  value,
  placeholder,
  name,
  onChange,
})=>{
 return(
    <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
 );
};

export default Input;
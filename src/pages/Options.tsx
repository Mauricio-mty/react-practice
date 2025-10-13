import React,{useState} from "react";
import RadioButton from "../components/RadioButton";

const menu=[
    {value:'CR7',label:'CR7'},
    {value:'Slatan',label:'Slatan'},
    {value:'Bael',label:'Bael'},
    {value:'Muller',label:'Muller'},
]

const Option: React.FC=()=>{

    const[select,setSelect]=useState('');

    const handleSelect=(event)=>{
        setSelect(event.target.value);
    };

    return(
           <RadioButton
                label="elegi"
                name="player"
                value={select}
                onChange={handleSelect}
                options={menu}
           /> 
    );
};

export default Option;
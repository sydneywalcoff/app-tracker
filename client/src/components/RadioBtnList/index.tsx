import { ChangeEventHandler } from "react";

import RadioBtn from "../RadioBtn";

import './assets/style.css';

interface RadioBtnListPropsI {
    options: string[]
}

const RadioBtnList = (params: RadioBtnListPropsI) => {
    const { options } = params;
    
    return(
        <div className="radio-btn-list flex justify-between">
           {options.map(option => <RadioBtn label={option}/>)}
        </div>
    )
};

export default RadioBtnList;
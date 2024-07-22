// import { ChangeEventHandler } from "react";

import RadioBtn from "../RadioBtn";

import './assets/style.css';

interface RadioBtnOptionI {
    label: string,
    selected: boolean,
}

interface RadioBtnListPropsI {
    options: RadioBtnOptionI[],
    onStyleChange: (newStyle: string) => void;
}

const RadioBtnList = (params: RadioBtnListPropsI) => {
    const { options, onStyleChange } = params;
    
    return(
        <div className="radio-btn-list flex justify-between">
           {options.map(option => <RadioBtn label={option.label} key={option.label} selected={option.selected} onStyleChange={onStyleChange}/>)}
        </div>
    )
};

export default RadioBtnList;
import { ChangeEventHandler } from "react";

import RadioBtn from "../RadioBtn";

import './assets/style.css';

interface RadioBtnListPropsI {
    options: string[]
    // onChange: ChangeEventHandler<HTMLInputElement>
    // classes?: string;
    // name: string;
    // text: string;
    // type?: string;
}

const RadioBtnList = (params: RadioBtnListPropsI) => {
    const { options } = params;
    console.log(options)
    return(
        <div className="radio-btn-list flex justify-between">
           {options.map(option => <RadioBtn />)}
        </div>
    )
};

export default RadioBtnList;
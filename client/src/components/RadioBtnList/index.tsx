import { ChangeEventHandler } from "react";

import RadioBtn from "../RadioBtn";

import './assets/style.css';

interface RadioBtnListPropsI {
    // onChange: ChangeEventHandler<HTMLInputElement>
    // classes?: string;
    // name: string;
    // text: string;
    // type?: string;
}

const RadioBtnList = (params: RadioBtnListPropsI) => {
    
    return(
        <div className="radio-btn-list">
           radio btn
        </div>
    )
};

export default RadioBtnList;
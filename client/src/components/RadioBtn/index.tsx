import { ChangeEventHandler } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label } = params;
    return(
        <div className="radio-btn-div">
           {label}
        </div>
    )
};

export default RadioBtn;
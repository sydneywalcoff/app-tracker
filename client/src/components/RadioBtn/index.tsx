import { ChangeEventHandler } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label } = params;
    return (
        <div className="radio-btn-container">
            <div className="radio-btn"></div>
            <p>{label}</p>
        </div>
    )
};

export default RadioBtn;
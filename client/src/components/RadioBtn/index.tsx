import { ChangeEventHandler } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label } = params;
    return (
        <div className="radio-btn-container flex">
            <div className="radio-btn shadow-sm"></div>
            <p className="label">{label}</p>
        </div>
    )
};

export default RadioBtn;
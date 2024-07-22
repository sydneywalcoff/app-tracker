// import { ChangeEventHandler } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    selected: boolean;
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label, selected } = params;

    return (
        <div className="radio-btn-container flex">
            <div className={`radio-btn shadow-sm ${selected ? 'selected' : ''}`}></div>
            <p className="label">{label}</p>
        </div>
    )
};

export default RadioBtn;
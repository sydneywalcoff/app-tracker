import { useEffect, useState } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    selected: boolean;
    onStyleChange: (newStyle: string)=> void;
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label, selected } = params;
    const [isSelected, setSelected] = useState(selected);

    useEffect(() => {setSelected(selected)}, [selected]);

    const handleClick = () => {
        console.log(label);
    };

    return (
        <div className="radio-btn-container flex">
            <div className={`radio-btn shadow-sm ${isSelected ? 'selected' : ''}`} onClick={handleClick}></div>
            <p className="label">{label}</p>
        </div>
    )
};

export default RadioBtn;
import { useEffect, useState } from "react";

import './assets/style.css';

interface RadioBtnPropsI {
    label: string;
    selected: string;
    onStyleChange: (newStyle: string) => void;
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label, onStyleChange, selected } = params;
    const [isSelected, setSelected] = useState(false);

    useEffect(() => { 
        selected === label ? setSelected(true) : setSelected(false)
    }, [selected, label]);

    const handleClick = () => {
        onStyleChange(label);
    };

    return (
        <div className="radio-btn-container flex" onClick={handleClick}>
            <div role="radio" aria-checked={isSelected} aria-labelledby={`radio-label-${label}`} tabIndex={0} className={`radio-btn shadow-sm ${isSelected ? 'selected' : ''}`}></div>
            <p className="label" id={`radio-label-${label}`}>{label}</p>
        </div>
    )
};

export default RadioBtn;
import { useEffect, useState, useRef, KeyboardEvent } from "react";

import './assets/style.css';
import Accessibility from "../../utils/accessibility";

interface RadioBtnPropsI {
    label: string;
    selected: string;
    onStyleChange: (newStyle: string) => void;
}

const RadioBtn = (params: RadioBtnPropsI) => {
    const { label, onStyleChange, selected } = params;
    const [isSelected, setSelected] = useState(false);
    const radioBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => { 
        selected === label ? setSelected(true) : setSelected(false)
    }, [selected, label]);

    const handleClick = () => {
        onStyleChange(label);
        radioBtnRef.current?.focus()
    };

    const handleRadioBtnKeyDown = (e: KeyboardEvent) => {
        const { code } = e;
        const { toggleKeys } = Accessibility;

        if(toggleKeys.includes(code)) {
            handleClick();
            return;
        }
    };

    return (
        <div className="radio-btn-container flex" onClick={handleClick} onKeyDown={handleRadioBtnKeyDown}>
            <div role="radio" aria-checked={isSelected} aria-labelledby={`radio-label-${label}`} tabIndex={0} className={`radio-btn shadow-sm ${isSelected ? 'selected' : ''}`}></div>
            <p className="label" id={`radio-label-${label}`}>{label}</p>
        </div>
    )
};

export default RadioBtn;
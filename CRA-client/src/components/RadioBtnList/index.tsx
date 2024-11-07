
import RadioBtn from "../RadioBtn";

import './assets/style.css';

interface RadioBtnListPropsI {
    options: string[],
    selected: string,
    onStyleChange: (newStyle: string) => void;
}

const RadioBtnList = (params: RadioBtnListPropsI) => {
    const { options, onStyleChange, selected } = params;
    
    return(
        <div className="radio-btn-list flex justify-between" role="radiogroup">
           {options.map(option => <RadioBtn label={option} key={option} selected={selected} onStyleChange={onStyleChange}/>)}
        </div>
    )
};

export default RadioBtnList;
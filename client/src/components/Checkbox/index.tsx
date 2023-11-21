import { ChangeEventHandler } from "react";

import './assets/style.css';

interface CheckboxPropsI {
    onChange: ChangeEventHandler<HTMLInputElement>
    classes?: string;
    name: string;
}

const Checkbox = ({onChange, classes, name}: CheckboxPropsI) => {
    
    return(
        <div className="checkbox-div">
            <label
                htmlFor={name}
                className="block"
            >
                Quick Apply?
            </label>
            <input
                type="checkbox"
                name={name}
                id={name}
                onChange={onChange}
            />
            <span className={`checkbox-custom drop-shadow-md ${classes ? classes : ''}`}></span>
        </div>
    )
};

export default Checkbox;
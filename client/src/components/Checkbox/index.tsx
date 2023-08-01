import { ChangeEventHandler } from "react";

import './assets/style.css';

interface CheckboxPropsI {
    onChange: ChangeEventHandler<HTMLInputElement>
    classes?: string;
}

const Checkbox = ({onChange, classes}: CheckboxPropsI) => {
    
    return(
        <div className="checkbox-div">
            <label
                htmlFor="quick-apply"
                className="block"
            >
                Quick Apply?
            </label>
            <input
                type="checkbox"
                name="quick-apply"
                id="quick-apply"
                onChange={onChange}
            />
            <span className={`checkbox-custom drop-shadow-md ${classes ? classes : ''}`}></span>
        </div>
    )
};

export default Checkbox;
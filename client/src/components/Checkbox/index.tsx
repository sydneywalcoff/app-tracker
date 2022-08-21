import { ChangeEventHandler } from "react";

import './assets/style.css';

interface CheckboxPropsI {
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({onChange}: CheckboxPropsI) => {
    return(
        <div className="checkbox-div">
            <label
                htmlFor="quick-apply"
                className="block"
            >
                Quick Apply?
            </label>
            <span className="checkbox ml-2 drop-shadow-md"></span>
            <input
                type="checkbox"
                name="quick-apply"
                id="quick-apply"
                onChange={onChange}
            />
        </div>
    )
};

export default Checkbox;
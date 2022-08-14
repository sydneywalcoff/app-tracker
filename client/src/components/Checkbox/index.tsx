import { ChangeEventHandler } from "react";

import './assets/style.css';

interface CheckboxPropsI {
    onChange: ChangeEventHandler<HTMLInputElement>
    classes?: String,
}

const Checkbox = ({onChange, classes}: CheckboxPropsI) => {
    return(
        <>
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
                className={`mx-2 ${classes}`}
                onChange={onChange}
            />
        </>
    )
};

export default Checkbox;
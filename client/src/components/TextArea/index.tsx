import { ChangeEventHandler } from "react";

import './assets/style.css'

interface TextAreaPropsI {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    labelText: String;
    classes?: String;
    name?: string;
    placeholder?: string;
    value?: string;
}

const TextArea = ({onChange, labelText, name, classes, placeholder, value }: TextAreaPropsI) => {
    return (
        <>
            <label
                htmlFor={name}
                className="block font-medium text-gray-700"
            >
                {labelText}
            </label>
            <textarea
                name={name}
                rows={5}
                id={name}
                className={`mt-1 py-2 px-3 block w-full drop-shadow-md ${classes}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
};

export default TextArea;
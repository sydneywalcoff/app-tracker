import { ChangeEventHandler } from "react";

import './assets/style.css'

interface TextAreaPropsI {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    labelText: String;
    classes?: String;
    name?: string;
}

const TextArea = ({onChange, labelText, name, classes }: TextAreaPropsI) => {
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
                onChange={onChange}
            />
        </>
    );
};

export default TextArea;
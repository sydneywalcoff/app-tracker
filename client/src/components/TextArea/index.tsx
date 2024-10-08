import { ChangeEventHandler, ChangeEvent, useState, Dispatch, useEffect } from "react";

import './assets/style.css'

interface TextAreaPropsI {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    labelText: String;
    classes?: String;
    name?: string;
    placeholder?: string;
    value?: string;
    rows?: number;
    required?: boolean;
    isCleared?: boolean;
    setIsCleared?: Dispatch<boolean>
}

const TextArea = ({ onChange, labelText, name, classes, placeholder, value, rows, required, isCleared, setIsCleared }: TextAreaPropsI) => {
    const [error, setError] = useState(false);
    const isRequired = typeof (value) === 'string' && required;

    useEffect(() => {
        if(isCleared && setIsCleared) { 
            setError(false);
            setIsCleared(false)
        }
    }, [isCleared, setIsCleared])

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (isRequired && value.length > 0) { setError(false) };
        onChange(e);
    };

    const handleBlur = () => {isRequired && value.length === 0 ?  setError(true) : setError(false)};

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
                rows={rows ? rows : 5}
                id={name}
                className={`mt-1 py-2 px-3 block w-full drop-shadow-md ${classes ? classes : ''} ${error ? 'error' : ''}`}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
        </>
    );
};

export default TextArea;
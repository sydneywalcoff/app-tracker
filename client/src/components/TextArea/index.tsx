import { ChangeEventHandler } from "react";

import './assets/style.css'

interface TextAreaPropsI {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    labelText: String;
    classes?: String;
}

const TextArea = ({onChange, labelText, classes }: TextAreaPropsI) => {
    return (
        <>
            <label
                htmlFor="job-description"
                className="block text-sm font-medium text-gray-700"
            >
                {labelText}
            </label>
            <textarea
                name="job-description"
                rows={5}
                id="job-description"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full drop-shadow-md ${classes}`}
                onChange={onChange}
            />
        </>
    );
};

export default TextArea;
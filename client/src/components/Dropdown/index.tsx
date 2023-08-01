import { ChangeEventHandler } from "react";

import './assets/style.css';

interface DropdownPropsI {
    onChange: ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = ({ onChange }: DropdownPropsI) => {
    return (
        <>
            <label
                htmlFor="stage"
                className="block font-medium"
            >
                stage
            </label>
            <select
                id="stage"
                name="stage"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onBlur={onChange}
            >
                <option value="preparing">Preparing</option>
                <option value="applied">Applied</option>
            </select>
        </>
    );
};

export default Dropdown;
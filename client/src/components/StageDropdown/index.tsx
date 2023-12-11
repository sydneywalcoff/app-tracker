import { ChangeEventHandler, useState } from "react";

import StageBadge from "../StageBadge";

import './assets/style.css';

interface StageDropdownPropsI {
    onChange: ChangeEventHandler<HTMLSelectElement>
    options: string[]
}

const StageDropdown = ({ onChange, options }: StageDropdownPropsI) => {
    const [selectedStage, setSelectedStage] = useState(options[0]);
    return (
        <>
            <label
                htmlFor="stage"
                className="block font-medium"
            >
                stage
            </label>
            <div className="stage-select-container">
                <div className="selected-stage">{selectedStage}</div>
                <div className="stage-options">
                    {options && options.map(option => (
                        <div className="stage-container">
                            <StageBadge stage={option} />   
                        </div>
                    ))}
                </div>
            </div>
            {/* <select
                id="stage"
                name="stage"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onBlur={onChange}
            >{ options ? options.map(option => (
                <option value={option}>{option}</option>
            )) : (<>
                <option value="preparing">Preparing</option>
                <option value="applied">Applied</option>
                </>)}
            </select> */}
        </>
    );
};

export default StageDropdown;
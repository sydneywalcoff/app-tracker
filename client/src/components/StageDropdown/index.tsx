import { ChangeEventHandler, useState, MouseEvent } from "react";

import StageBadge from "../StageBadge";
import ArrowSVG from './assets/arrow.svg';

import './assets/style.css';

interface StageDropdownPropsI {
    onChange: ChangeEventHandler<HTMLSelectElement>
    options: string[]
}

const StageDropdown = ({ onChange, options }: StageDropdownPropsI) => {
    const [selectedStage, setSelectedStage] = useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const on

    return (
        <div className="dropdown shadow-sm">
            <label
                htmlFor="stage-dropdown"
                className="block font-medium"
            >
                stage
            </label>
            <div className={`stage-select-container active${isDropdownOpen ? 'active' : '' }` } id="stage-dropdown">
                <div className="selected-stage p-2">
                    <StageBadge stage={selectedStage} />
                    <div className="arrow">
                        <img src={ArrowSVG} alt="arrow icon" />
                        </div>
                </div>
                <div className='stage-options shadow-lg'>
                    {options && options.map(option => (
                        <div className="stage-container py-1 px-2">
                            <StageBadge stage={option} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StageDropdown;
import { useState } from "react";

import StageBadge from "../StageBadge";
import ArrowSVG from './assets/arrow.svg';

import './assets/style.css';

interface StageDropdownPropsI {
    options: string[]
}

const StageDropdown = ({ options }: StageDropdownPropsI) => {
    const [selectedStage, setSelectedStage] = useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="dropdown shadow-sm">
            <label
                htmlFor="stage-dropdown"
                className="block font-medium"
            >
                stage
            </label>
            <div className={`stage-select-container ${isDropdownOpen ? 'active' : '' }` } id="stage-dropdown">
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
import { useState } from "react";

import StageBadge from "../StageBadge";
import ArrowSVG from './assets/arrow.svg';

import './assets/style.css';

interface StageDropdownPropsI {
    onStageChange: (newStage:string, jobId:string) => Promise<void> | ((newStage: string) => void )| void;
    jobId?: string | undefined;
    selectedStage: string;
    options: Array<string>;
}

const StageDropdown = ({ options, onStageChange, selectedStage, jobId }: StageDropdownPropsI) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (newStage: string, job:any ) => {
        onStageChange(newStage, job)
    };

    return (
        <div className="dropdown">
            <label
                htmlFor="stage-dropdown"
                className="block font-medium"
            >
                stage
            </label>
            <div className={`stage-select-container ${isDropdownOpen ? 'active' : ''}`} id="stage-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="selected-stage p-2">
                    <StageBadge stage={selectedStage} />
                    <div className="arrow">
                        <img src={ArrowSVG} alt="arrow icon" />
                    </div>
                </div>
                <div className='stage-options shadow-lg'>
                    {options && options.map((option:string) => (
                        <div className="stage-container py-1 px-2" key={option.split(' ').join('-')} onClick={() => handleClick(option, jobId)}>
                            <StageBadge stage={option} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StageDropdown;
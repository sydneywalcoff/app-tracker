import { KeyboardEvent, useState } from "react";

import StageBadge from "../StageBadge";
import ArrowSVG from './assets/arrow.svg';

import Accessibility from "../../utils/accessibility";

import './assets/style.css';

interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    dateApplied: string;
    lastUpdated: string;
}

interface StageDropdownPropsI {
    onStageChange: (newStage: string, job: jobProp) => Promise<void> | ((newStage: string) => void) | void;
    job?: jobProp | undefined;
    selectedStage: string;
    options: Array<string>;
}

const StageDropdown = ({ options, onStageChange, selectedStage, job }: StageDropdownPropsI) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownKeyPress = (event: KeyboardEvent) => {
        const { code } = event;
        const { toggleKeys, closeKeys } = Accessibility;
        if (toggleKeys.includes(code)) {
            handleDropdownToggle();
            return;
        };
        if(closeKeys.includes(code)) {
            closeDropdown();
        }
    }

    const handleDropdownClick = () => {
        handleDropdownToggle();
    }

    const handleClick = (newStage: string, jobInfo: any) => {
        onStageChange(newStage, jobInfo)
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="dropdown">
            <label
                htmlFor="stage-dropdown"
                className="block font-medium"
            >
                stage
            </label>
            <div
                className={`stage-select-container ${isDropdownOpen ? 'active' : ''}`}
                id="stage-dropdown"
                onClick={handleDropdownClick}
                onKeyDown={handleDropdownKeyPress}
                tabIndex={0}
                aria-expanded={isDropdownOpen}
                aria-controls="listbox"
            >
                <div className="selected-stage p-2">
                    <StageBadge stage={selectedStage} />
                    <div className="arrow">
                        <img src={ArrowSVG} alt="arrow icon" />
                    </div>
                </div>
                <div className='stage-options shadow-lg' onMouseLeave={closeDropdown} role="listbox" aria-expanded={isDropdownOpen}>
                    {options && options.map((option: string) => (
                        <div className="stage-container py-1 px-2" role="option" key={option.split(' ').join('-')} onClick={() => handleClick(option, job)}>
                            <StageBadge stage={option} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StageDropdown;
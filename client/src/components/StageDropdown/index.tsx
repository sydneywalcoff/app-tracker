import StageBadge from "../StageBadge";

import { JobProp } from "../../types/global.types";

import './assets/style.css';


interface StageDropdownPropsI {
    onStageChange: (newStage: string, job?: (JobProp | undefined)) => Promise<void> | void;
    job?: JobProp | undefined;
    selectedStage: string;
    options: Array<string>;
    hideLabel?: Boolean;
    classes?: string;
    hideArrow?: Boolean;
}


import Dropdown from '../Dropdown';

const StageDropdown = ({ onStageChange, selectedStage, options, hideLabel, classes, hideArrow }: StageDropdownPropsI) => {
    let formattedClasses = 'stage-dropdown-container ' + classes;

    return (
        <Dropdown onChange={onStageChange} selectedOption={selectedStage} options={options} hideLabel={hideLabel} label="stage" id="stage-dropdown" classes={formattedClasses} OptionWrapperEl={StageBadge} hideArrow={hideArrow}/>
    )
};

export default StageDropdown;
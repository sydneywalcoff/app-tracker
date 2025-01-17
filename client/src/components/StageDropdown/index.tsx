import StageBadge from "../StageBadge";


import { JobProp } from "../../types/global.types";


interface StageDropdownPropsI {
    onStageChange: (newStage: string, job?: (JobProp | undefined)) => Promise<void> | void;
    job?: JobProp | undefined;
    selectedStage: string;
    options: Array<string>;
    hideLabel?: Boolean;
    classes?: string;
}


import Dropdown from '../Dropdown';

const StageDropdown = ({ onStageChange, job, selectedStage, options, hideLabel, classes }: StageDropdownPropsI) => {
    let optionStageBadges = options.map(option => <StageBadge stage={option}/>)
    if(typeof(options[0]) == 'object') {
    }
    return (
        <Dropdown onChange={onStageChange} selectedOption={<StageBadge stage={selectedStage} />} options={optionStageBadges} hideLabel={hideLabel} label="stage" id="stage-dropdown" classes={classes}/>
    )
};

export default StageDropdown;
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

    return (
        <Dropdown onChange={onStageChange} selectedOption={selectedStage} options={options} hideLabel={hideLabel} label="stage" id="stage-dropdown" classes={classes} OptionWrapperEl={StageBadge}/>
    )
};

export default StageDropdown;
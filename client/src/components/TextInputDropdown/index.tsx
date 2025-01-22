import { ChangeEvent } from "react";

import TextInput from "../TextInput";
import Dropdown from "../Dropdown";

interface TextInputDropdownI {
    classes: string
}

const TextInputDropdown = ({ classes }: TextInputDropdownI) => {

    const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    };

    const onDropdownChange = () => console.log('hi')

    return (
        <div className={classes}>
            {/* <TextInput labelTitle="source-dropdown" name="source-dropdown" onChange={onTextInputChange}/> */}
            <Dropdown selectedOption=" " onChange={onDropdownChange} options={['LinkedIn', 'ZipRecruiter', ]} label='Source' hideLabel id='source-dropdown' />
        </div >
    );

};

export default TextInputDropdown
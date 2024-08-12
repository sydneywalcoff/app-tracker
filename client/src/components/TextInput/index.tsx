import { ChangeEventHandler } from 'react';

import './assets/style.css';

interface TextInputPropsI {
    labelTitle?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
    value?: string | number;
    type?: string;
}

const TextInput = ({ labelTitle, onChange, name, value, type }: TextInputPropsI) => {
    const styledName = labelTitle ? labelTitle : name;
    if(!type) {
        type = name === 'password' ? 'password' : 'text';
    }

    return (
        <input type={type} name={name} className="drop-shadow-md p-2" onChange={onChange} placeholder={styledName} value={value}/>
    );
}

export default TextInput;
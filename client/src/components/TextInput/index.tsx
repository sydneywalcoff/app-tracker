import { ChangeEventHandler } from 'react';

import './assets/style.css';

interface TextInputPropsI {
    labelTitle?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
}

const TextInput = ({ labelTitle, onChange, name }: TextInputPropsI) => {
    const styledName = labelTitle ? labelTitle : name;
    return (
        <>
            <label htmlFor={name}>{styledName}:</label>
            <input type={name === 'password' ? 'password' : 'text'} name={name} className="drop-shadow-md p-2" onChange={onChange}/>
        </>
    );
}

export default TextInput;
import { ChangeEventHandler } from 'react';

import './assets/style.css';

interface TextInputPropsI {
    labelTitle: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name?: string;
}

const TextInput = ({labelTitle, onChange, name }: TextInputPropsI) => {
    return (
        <>
            <label htmlFor={labelTitle}>{labelTitle}:</label>
            <input type={labelTitle === 'password' ? 'password' : 'text'} name={name} className="drop-shadow-md p-2" onChange={onChange}/>
        </>
    );
}

export default TextInput;
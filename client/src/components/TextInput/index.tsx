import { ChangeEventHandler, ChangeEvent, useState } from 'react';

import './assets/style.css';

interface TextInputPropsI {
    labelTitle?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
    value?: string | number;
    required?: boolean;
}

const TextInput = ({ labelTitle, onChange, name, value, required }: TextInputPropsI) => {
    const [error, setError] = useState(false);
    const styledName = labelTitle ? labelTitle : name;
    let inputType;
    if(name === 'password') inputType = 'password';
    if(name === 'job-score' || name === 'ats-score') inputType = 'number';
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(typeof(value) === 'string' && required && value?.length > 0 ) {
            setError(false);
        }
        onChange(e);
    }

    const handleBlur = () => {
        if(!required) return;
        if(typeof(value) === 'string' && value?.length === 0) {
            setError(true);
            return;
        }
    };


    return (
        <input type={inputType} name={name} className={`drop-shadow-md p-2 ${error ? 'error' : ''}`} onChange={handleChange} placeholder={styledName} value={value} onBlur={handleBlur}/>
    );
}

export default TextInput;
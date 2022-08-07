import { ChangeEventHandler } from 'react';

interface TextInputPropsI {
    labelTitle: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({labelTitle, onChange }: TextInputPropsI) => {
    return (
        <>
            <label htmlFor={labelTitle}>{labelTitle}:</label>
            <input type={labelTitle === 'password' ? 'password' : 'text'} name={labelTitle} className="" onChange={onChange}/>
        </>
    );
}

export default TextInput;
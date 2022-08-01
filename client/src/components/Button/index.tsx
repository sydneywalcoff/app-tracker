import { MouseEventHandler } from 'react';
import './assets/style.css'

interface buttonPropsI {
    text: string;
    classes?: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ text, classes, onClick }: buttonPropsI) => {
    
    return(
        <button className={`px-4 ${classes}`} onClick={onClick}>{text}</button>
    );
};

export default Button;
import './assets/style.css'

interface buttonPropsI {
    text: string;
    classes?: string;
}

const Button = ({ text, classes }: buttonPropsI) => {
    
    return(
        <button className={`px-4 ${classes}`}>{text}</button>
    );
};

export default Button;
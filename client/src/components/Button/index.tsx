import './assets/style.css'

interface buttonPropsI {
    text: string;
    color?: string;
}

const Button = ({ text, color }: buttonPropsI) => {
    
    return(
        <button className={`py-1 px-4 ${color}`}>{text}</button>
    );
};

export default Button;
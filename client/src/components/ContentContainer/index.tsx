import { ReactElement } from 'react';
import './assets/style.css';

interface ContentContainerPropsI {
    children: ReactElement;
    className?: String;
} 

const ContentContainer = ({children, className}: ContentContainerPropsI) => {
    return(
        <section className={`contentContainer ${className ? className : ''}`}>
            {children}
        </section>
    );
};


export default ContentContainer;
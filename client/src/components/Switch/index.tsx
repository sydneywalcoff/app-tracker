import { Dispatch } from 'react';

interface SwitchProps {
    active: boolean
    setActiveApps: Dispatch<boolean>
}

const Switch = (props: SwitchProps ) => {
    const { active, setActiveApps } = props;
    let bgColorClass, textColorClass, text;
    if(active) {
        bgColorClass = 'bg-gray-900';
        textColorClass='text-white';
        text = 'Active'
    } else {
        bgColorClass = 'bg-white border border-black-900';
        textColorClass='text-black';
        text = 'All'
    }
    const filterActiveApps = () => {
        setActiveApps(!active);
    };
    return (
        <span className={`px-2 inline-flex my-auto text-xs leading-5 font-semibold rounded-full ${bgColorClass} ${textColorClass}`} onClick={filterActiveApps}>{text} Apps</span>
    );
};

export default Switch;
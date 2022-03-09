import { Dispatch } from 'react'
interface FilterProps {
    active: boolean
    setActiveApps: Dispatch<boolean>
}

const Filter = (props: FilterProps ) => {
    const { active, setActiveApps } = props;
    let bgColorClass, textColorClass, text;
    if(active) {
        bgColorClass = 'bg-black';
        textColorClass='text-white';
        text = 'Active'
    } else {
        bgColorClass = 'bg-white border border-black-900';
        textColorClass='text-black';
        text = 'All'
    }
    const filterActiveApps = () => {
        setActiveApps(!active)
    };
    return (
        <span className={`px-2 inline-flex my-auto text-xs leading-5 font-semibold rounded-full ${bgColorClass} ${textColorClass}`} onClick={filterActiveApps}>{text} Apps</span>
    );
};

export default Filter;
import React from 'react';

interface StageBadgeProps {
    stage: string
}

const StageBadge = ({ stage }: StageBadgeProps) => {
    let color;

    switch(stage) {
        case 'applied': {
            color = 'green';
            break;
        }
        case 'preparing': {
            color = 'gray';
            break;
        }
        case 'rejected': {
            color = 'red';
            break;
        }
        case 'phone screen': {
            color = 'blue';
            break;
        }
        case 'technical': {
            color = 'orange'
            break;
        }
        default:{
            break;
        }
    }

    const statusColorClass = `bg-${color}-100 text-${color}-800`;
    return(
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorClass}`}>{stage}</span>
    );
};

export default StageBadge;
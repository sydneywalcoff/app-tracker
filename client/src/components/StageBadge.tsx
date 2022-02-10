import React from 'react';

interface StageBadgeProps {
    stage: string
}

const StageBadge = ({ stage }: StageBadgeProps) => {
    let color;

    if(stage === 'applied') {
        color = 'bg-green-100 text-green-800'
    } else if (stage === 'preparing') {
        color = 'bg-gray-100 text-gray-800'
    }
    return(
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${color}`}>{stage}</span>
    );
};

export default StageBadge;
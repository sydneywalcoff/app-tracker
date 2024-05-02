

import './assets/style.css';

interface AppItemI {
    dateAdded: string;
    jobTitle: string;
    company: string;
    stage: string;
    location: string;
    AtsScore?: number;
}

const AppItem = (params: AppItemI) => {
    const { dateAdded, jobTitle, company, stage, location, AtsScore } = params;

    return (
        <div className="app-item-outer flex justify-between p-2">
            <div className='date-added item'>
                <p>{dateAdded}</p>
            </div>
            <div className='job-title item'>
                <p>{jobTitle}</p>
            </div>
            <div className='company item'>
                <p>{company}</p>
            </div>
            <div className='stage item'>
                <p>{stage}</p>
                {/* will be stage dropdown */}
            </div>
            <div className='location item'>
                <p>{location}</p>
            </div>
            <div className='ATS-score item'>
                <p>{AtsScore}</p>
            </div>
            <div className="spacer item">
                <p>More.</p>
            </div>
        </div>
    );
};


export default AppItem;
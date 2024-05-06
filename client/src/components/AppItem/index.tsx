import './assets/style.css';

import StageDropdown from '../StageDropdown';

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
    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    const handleDropdownChange = async (status: string) => {
        // try {
        //     await editAppStatus({
        //         variables: {
        //             ...job,
        //             id: job._id,
        //             status
        //         }
        //     })
        // } catch (e) {
        //     console.log(e)
        // }
    };

    return (
        <div className="app-item-outer flex justify-between px-2 py-1">
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
                <StageDropdown onStageChange={handleDropdownChange} selectedStage={stage} options={statusArr} hideLabel />
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
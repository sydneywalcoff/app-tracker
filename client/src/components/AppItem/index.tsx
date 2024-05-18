import { useRef, useEffect } from 'react';

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

    const appItemRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        const handleResize = () => {
            console.log(appItemRef.current?.offsetWidth)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

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
        <tr className="app-item-outer flex justify-between p-1" ref={appItemRef}>
            <td className='date-added item'>
                <p>{dateAdded}</p>
            </td>
            <td className='job-title item'>
                <p>{jobTitle}</p>
            </td>
            <td className='company item'>
                <p>{company}</p>
            </td>
            <td className='stage item'>
                <StageDropdown onStageChange={handleDropdownChange} selectedStage={stage} options={statusArr} hideLabel />
            </td>
            <td className='location item'>
                <p>{location}</p>
            </td>
            <td className='ATS-score item'>
                <p>{AtsScore}</p>
            </td>
            <td className="spacer item">
                <p>More.</p>
            </td>
        </tr>
    );
};


export default AppItem;
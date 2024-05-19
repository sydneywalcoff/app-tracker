import { useMutation } from '@apollo/client';

import { EDIT_APP_STATUS } from '../../utils/mutations';

import StageDropdown from '../StageDropdown';

import './assets/style.css';


interface AppItemI {
    dateAdded: string;
    jobTitle: string;
    company: string;
    stage: string;
    location: string;
    AtsScore?: number;
    _id: string;
}

const AppItem = (params: AppItemI) => {
    const [editAppStatus] = useMutation(EDIT_APP_STATUS);

    const { dateAdded, jobTitle, company, stage, location, AtsScore } = params;
    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    const handleDropdownChange = async (status: string) => {
        try {
            console.log(status)
            // await editAppStatus({
            //     variables: {
            //         ...params,
            //         id: params._id,
            //         status
            //     }
            // })
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <tr className="app-item-outer flex justify-between p-1 pr-4">
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
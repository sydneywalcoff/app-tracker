import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { EDIT_APP_STATUS } from '../../utils/mutations';
import { QUERY_MY_APPS } from '../../utils/queries';

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
    const { dateAdded, jobTitle, company, stage, location, AtsScore, _id } = params;
    const [selectedStage, setSelectedStage] = useState(stage);
    const [editAppStatus] = useMutation(EDIT_APP_STATUS, {
        update(cache, { data: { editAppStatus } }) {
            try {
                const { myApps }:any = cache.readQuery({ query: QUERY_MY_APPS });
                const editedApp = myApps.find((app: AppItemI) => app._id === _id);
                cache.writeQuery({
                    query: QUERY_MY_APPS,
                    data: { myApps: {...myApps, editedApp}}
                })
            } catch (e) {
                console.log(e)
            }
        }
    });

    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    const handleDropdownChange = async (status: string) => {
        try {
            setSelectedStage(status);
            await editAppStatus({
                variables: {
                    ...params,
                    id: params._id,
                    status
                }
            })
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <tr className="app-item-outer flex justify-between p-1">
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
                <StageDropdown onStageChange={handleDropdownChange} selectedStage={selectedStage} options={statusArr} hideLabel />
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
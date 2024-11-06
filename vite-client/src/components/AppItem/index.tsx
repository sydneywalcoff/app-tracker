import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { EDIT_APP_STATUS } from '../../utils/mutations';

import StageDropdown from '../StageDropdown';

import plusIcon from '../../assets/plus-icon.svg';

import './assets/style.css';

import { JobProp } from '../../types/global.types';


const AppItem = (params: JobProp) => {
    const { dateApplied, jobTitle, companyName, status, location, locationObj, jobScore, _id } = params;
    const [selectedStage, setSelectedStage] = useState(status);
    const [editAppStatus] = useMutation(EDIT_APP_STATUS);

    useEffect(() => {
        setSelectedStage(status)
    }, [status])

    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    let styledLocation;
    if (locationObj) {
        const { workStyle, officeLocation } = locationObj;
        if (workStyle === 'remote') {
            styledLocation = 'Remote';
        } else if (!officeLocation) {
            styledLocation = workStyle; 
        } else {
            styledLocation = officeLocation
        }
    } else {
        styledLocation = location;
    }

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
                <p>{dateApplied}</p>
            </td>
            <td className='job-title item'>
                <p>{jobTitle}</p>
            </td>
            <td className='companyName item'>
                <p>{companyName}</p>
            </td>
            <td className='status item'>
                <StageDropdown onStageChange={handleDropdownChange} selectedStage={selectedStage} options={statusArr} hideLabel />
            </td>
            <td className='location item'>
                <p>{styledLocation}</p>
            </td>
            <td className='ATS-score item'>
                <p>{jobScore ? jobScore : ''}</p>
            </td>
            <td className="spacer item">
                <Link
                    to={`/applied/${_id}`}
                    className="hover:text-indigo-900"
                >
                    <img src={plusIcon} alt="more" className='plus-icon' />
                </Link>
            </td>
        </tr>
    );
};


export default AppItem;
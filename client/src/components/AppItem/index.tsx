import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { EDIT_APP_STATUS } from '../../utils/mutations';

import StageDropdown from '../StageDropdown';

import plusIcon from '../../assets/plus-icon.svg';

import './assets/style.css';

interface Location {
    workStyle: string;
    officeLocation: string;
}

interface AppItemI {
    dateAdded: string;
    jobTitle: string;
    company: string;
    stage: string;
    location: Location;
    jobScore?: number;
    _id: string;
}

const AppItem = (params: AppItemI) => {
    const { dateAdded, jobTitle, company, stage, location: { workStyle, officeLocation }, jobScore, _id } = params;
    const [selectedStage, setSelectedStage] = useState(stage);
    const [editAppStatus] = useMutation(EDIT_APP_STATUS);

    useEffect(() => {
        setSelectedStage(stage)
    }, [stage])

    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    let styledLocation;
    styledLocation = workStyle === 'remote' ? 'Remote' : officeLocation;


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
                <p>{styledLocation}</p>
            </td>
            <td className='ATS-score item'>
                <p>{jobScore}</p>
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
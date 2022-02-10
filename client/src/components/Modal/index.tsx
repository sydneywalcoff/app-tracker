import React, { SetStateAction, Dispatch } from 'react';
import './styles.css'
import StageBadge from '../StageBadge'

interface jobProp {
    id: string,
    jobTitle: string,
    companyName: string,
    jobDescription: string,
    location: string,
    stage: string,
    dateApplied: string
}

interface ModalProps {
    job: jobProp,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}


const Modal = ({ job, setModalOpen }: ModalProps) => {
    return (
        <>
            <div className='darkBG' />
            <div className='centered modal'>
                    <div className='flex justify-end mx-4 pt-1' onClick={() => setModalOpen(false)}>x</div>
                    <h3 className='flex text-xl justify-center'>{job.jobTitle}</h3>
                    <div className="flex justify-evenly mt-2">
                        <p className="text-sm">{job.dateApplied}</p>
                        <h4 className="text-sm">{job.companyName}</h4>
                        <StageBadge stage ={job.stage}></StageBadge>
                    </div>
                    <p className="px-5 text-sm text-center mt-3">{job.jobDescription}</p>
            </div>
        </>
    );

};

export default Modal
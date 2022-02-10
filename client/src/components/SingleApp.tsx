import React from 'react';
import { getSingleJob } from '../utils/localStorage';
import { useParams } from 'react-router-dom';

const SingleApp = () => {
    const { jobId } = useParams();
    if(!jobId) {
        return (
            <h1>Sorry! Something is wrong. </h1>
        );
    }
    let job = getSingleJob(jobId);
    return (
        <section className='flex p-9 w-screen justify-center'>
            <div className="flex-col px-5">
                <h1 className='text-4xl font-bold mb-2'>{job.jobTitle}</h1>
                <h2 className="text-xl mb-5">{job.companyName}</h2>
                <p className='text-md'>{job.jobDescription}</p>
            </div>
            <div className = 'flex-col px-5'>
                <h2 className=''><span className="font-bold">location: </span>{job.location} </h2>
                <h2 className=''><span className="font-bold">stage: </span>{job.stage} </h2>
                <h2 className=''><span className="font-bold">date applied: </span>{job.dateApplied} </h2>
            </div>
        </section>
    );
};

export default SingleApp;
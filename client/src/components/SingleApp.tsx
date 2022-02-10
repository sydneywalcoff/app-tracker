import React from 'react';
import { getSingleJob } from '../utils/localStorage';
import { useParams } from 'react-router-dom';

const SingleApp = () => {
    let { jobId } = useParams();
    if(!jobId) {
        return (
            <h1 className="mx-auto my-8 text-3xl">Sorry! Something went wrong. </h1>
        );
    }
    let job = getSingleJob(jobId);
    if(!job) {
        return (
            <h1 className="mx-auto my-8 text-3xl">Sorry! No application with that ID. </h1>
        );
    }
    return (
        <section className='flex p-9 w-screen justify-center'>
            <div className="px-5 basis-3/4">
                <h1 className='text-4xl font-bold mb-2'>{job.jobTitle}</h1>
                <h2 className="text-xl mb-5">{job.companyName}</h2>
                <p className='text-md'>{job.jobDescription}</p>
            </div>
            <div className = 'px-5 basis-1/4'>
                <h2 className='pb-3'><span className="font-bold">location: </span>{job.location} </h2>
                <h2 className='pb-3'><span className="font-bold">stage: </span>{job.stage} </h2>
                <h2 className='pb-3'><span className="font-bold">date applied: </span>{job.dateApplied} </h2>
            </div>

        </section>
    );
};

export default SingleApp;
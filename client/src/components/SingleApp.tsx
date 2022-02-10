import React from 'react';
import { getSingleJob } from '../utils/localStorage';
import { useParams } from 'react-router-dom';

const SingleApp = () => {
    let { jobId } = useParams();
    if (!jobId) {
        return (
            <h1 className="mx-auto my-8 text-3xl">Sorry! Something went wrong. </h1>
        );
    }
    let job = getSingleJob(jobId);
    if (!job) {
        return (
            <h1 className="mx-auto my-8 text-3xl">Sorry! No application with that ID. </h1>
        );
    }
    return (
        <section className='p-9 w-screen'>
            <div className="flex justify-center">
                <div className="px-5 basis-3/4">
                    <h1 className='text-4xl font-bold mb-2'>{job.jobTitle}</h1>
                    <h2 className="text-xl mb-5">{job.companyName}</h2>
                    <p className='text-md'>{job.jobDescription}</p>
                </div>
                <div className='px-5 basis-1/4'>
                    <button type="button" className="inline-flex justify-center mb-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
                    <div>
                        <h2 className='mb-3'><span className="font-bold">location: </span>{job.location} </h2>
                        <h2 className='mb-3'><span className="font-bold">stage: </span>{job.stage} </h2>
                        <h2 className='mb-3'><span className="font-bold">date applied: </span>{job.dateApplied} </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleApp;
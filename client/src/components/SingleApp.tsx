import React from 'react';

interface jobProp {
    jobTitle: string,
    companyName: string,
    jobDescription: string,
    location: string,
    stage: string,
    dateApplied: string
}

const SingleApp = () => {
    const job = {
        jobTitle: 'Front End Developer',
        companyName: 'Amazon',
        jobDescription: 'ajdsl;gja;ldjfal;dkghnaldnflakvnjkasdnkajdngl;amdscl;nja jksdglasdjfla;mlnadfhalsdfkjalsknal;fhnglaksmclknkjadshfgl;asdjf',
        location: 'remote',
        stage: 'applied',
        dateApplied: '2/9/22'
    };
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
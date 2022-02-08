interface jobProp {
    jobTitle: string,
    companyName: string,
    jobDescription: string,
    location: string,
    stage: string
}

const getJobs = () => {
    const jobsArr = localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs') || '') : [];
    return jobsArr
};

const saveJob = (job: jobProp) => {
    let jobsArr = getJobs();
    jobsArr.push(job)
    localStorage.setItem('jobs', JSON.stringify(jobsArr))
}

export { getJobs, saveJob }
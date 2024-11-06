import { JobProp } from "../types/global.types";

const getJobs = () => {
    const jobsArr = localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs') || '') : [];
    return jobsArr
};

const getSingleJob = (id: string) => {
    let jobsArr = getJobs();
    const job = jobsArr.filter((el: JobProp) => el._id === id);
    return job[0];
};

const saveJob = (job: JobProp) => {
    let jobsArr = getJobs();
    jobsArr.push(job)
    localStorage.setItem('jobs', JSON.stringify(jobsArr))
}

export { getJobs, saveJob, getSingleJob }
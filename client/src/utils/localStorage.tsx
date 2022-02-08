const getJobs = () => {
    const jobsArr = localStorage.getItem('jobs') ? localStorage.getItem('jobs') : [];

    return jobsArr
};

export { getJobs }
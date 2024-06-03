interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    dateApplied: string;
    lastUpdated: string;
    atsScore: number;
}

const filterJobsByText = (searchText: string, jobsArr: jobProp[]): jobProp[] => {
    if (!searchText) return jobsArr;
    let searchResults: Set<jobProp> = new Set();
    jobsArr.filter((job: jobProp) => {
        const {
            jobTitle,
            location,
            companyName
        } = job;
        if (companyName.toLowerCase().includes(searchText.toLowerCase()) || location.toLowerCase().includes(searchText.toLowerCase()) || jobTitle.toLowerCase().includes(searchText.toLowerCase())) {
            searchResults.add(job)
        }
    })
    return Array.from(searchResults);
};

export default filterJobsByText;
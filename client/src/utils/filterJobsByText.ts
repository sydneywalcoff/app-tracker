interface Location {
    workStyle: string;
    officeLocation: string;
}

interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    locationObj: Location;
    status: string;
    dateApplied: string;
    lastUpdated: string;
    atsScore: number;
}

const filterJobsByText = (searchText: string, jobsArr: jobProp[]): jobProp[] => {
    if (!searchText) return jobsArr;
    let searchResults: Set<jobProp> = new Set();
    jobsArr.forEach((job: jobProp) => {
        const {
            jobTitle,
            companyName
        } = job;
        if (companyName.toLowerCase().includes(searchText.toLowerCase()) || jobTitle.toLowerCase().includes(searchText.toLowerCase())) {
            searchResults.add(job)
        }
    })
    return Array.from(searchResults);
};

export default filterJobsByText;
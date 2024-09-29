import { JobProp } from "../types/global.types";

const filterJobsByText = (searchText: string, jobsArr: JobProp[]): JobProp[] => {
    if (!searchText) return jobsArr;
    let searchResults: Set<JobProp> = new Set();
    jobsArr.forEach((job: JobProp) => {
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
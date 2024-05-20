import AppItem from "../../components/AppItem";

import './assets/style.css';

interface AppItemI {
    dateApplied: string;
    jobTitle: string;
    companyName: string;
    status: string;
    location: string;
    AtsScore?: number;
    _id: string
}

interface AppTableI {
    apps: AppItemI[]
}

type jobStatusObj = {
    [key: string]: AppItemI[]
}

const AppTable = (params:AppTableI) => {
    const { apps } = params;
    let jobs = apps;

    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    const filterByStatus = () => {
        const jobStatusObj: jobStatusObj = {};
        jobs.forEach(app => {
            const { status } = app;
            if (!jobStatusObj[status]) {
                jobStatusObj[status] = [app];
                return;
            }
            jobStatusObj[status] = [app, ...jobStatusObj[status]];

        })
        let sortedJobs: AppItemI[][] = [];
        statusArr.forEach(status => {
            if (jobStatusObj[status]) {
                sortedJobs.push(jobStatusObj[status])
            }
        })
        return sortedJobs.flat();
    }
    jobs = filterByStatus();

    return (
        <table className="w-full divide-y flex flex-col">
            <thead className="w-full">
                <tr className="section-titles flex justify-between p-1 w-full">
                    <th className='date-added title'><p>Date</p></th>
                    <th className='job-title title'><p>Job Title</p></th>
                    <th className='company title'><p>Company</p></th>
                    <th className='stage title'><p>Stage</p></th>
                    <th className='location title'><p>Location</p></th>
                    <th className='ATS-score title'><p>ATS Score</p></th>
                    <th className="spacer title"></th>
                </tr>
            </thead>
            <tbody className="body w-full">
                {jobs.map((app) => <AppItem _id={app._id} dateAdded={app.dateApplied} jobTitle={app.jobTitle} company={app.companyName} stage={app.status} location={app.location} AtsScore={app.AtsScore} />)}
            </tbody>
        </table>
    );
};

export default AppTable;
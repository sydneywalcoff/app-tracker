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


const AppTable = (params:AppTableI) => {
    const { apps } = params;

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
                {apps.map((app) => <AppItem _id={app._id} dateAdded={app.dateApplied} jobTitle={app.jobTitle} company={app.companyName} stage={app.status} location={app.location} AtsScore={app.AtsScore} />)}
            </tbody>
        </table>
    );
};

export default AppTable;
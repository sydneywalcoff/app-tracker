import AppItem from "../../components/AppItem";

interface AppItemI {
    dateAdded: string;
    jobTitle: string;
    company: string;
    stage: string;
    location: string;
    AtsScore?: number;
}

interface AppTableI {
    apps: AppItemI[]
}


const AppTable = (params:AppTableI) => {
    const { apps } = params;

    return (
        <table className="w-full divide-y">
            <thead className="w-full">
                <tr className="section-titles flex justify-between p-1 w-full">
                    <th className='date-added title'>Date</th>
                    <th className='job-title title'>Job Title</th>
                    <th className='company title'>Company</th>
                    <th className='stage title'>Stage</th>
                    <th className='location title'>Location</th>
                    <th className='ATS-score title'>ATS Score</th>
                    <th className="spacer title"></th>
                </tr>
            </thead>
            <tbody className="body w-full">
                {apps.map((app) => <AppItem dateAdded={app.dateAdded} jobTitle={app.jobTitle} company={app.company} stage={app.stage} location={app.location} AtsScore={app.AtsScore} />)}
            </tbody>
        </table>
    );
};

export default AppTable;
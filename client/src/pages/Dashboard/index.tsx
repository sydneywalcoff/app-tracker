import './assets/style.css';

import ContentContainer from "../../components/ContentContainer";
import AppItem from "../../components/AppItem";

const DashboardPage = () => {
    const apps = [
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0
        },
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0
        },
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0
        },
    ]
    return (
        <ContentContainer className='dashboard'>
            <table className="w-full divide-y">
                <thead className="w-full">
                    <tr className="section-titles flex justify-between p-2 w-full">
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
        </ContentContainer>
    );
};

export default DashboardPage;
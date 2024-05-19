import './assets/style.css';

import ContentContainer from "../../components/ContentContainer";

import AppTable from '../../components/AppTable';
import TrackerForm from '../../components/TrackerForm';

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
        <ContentContainer className='dashboard flex'>
            <>
                <div className="main-container w-2/3">
                    <AppTable apps={apps} />

                </div>
                <div className="form-container ml-4 w-1/3">
                    <TrackerForm />
                </div>
            </>
        </ContentContainer>
    );
};

export default DashboardPage;
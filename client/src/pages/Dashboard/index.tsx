import './assets/style.css';

import ContentContainer from "../../components/ContentContainer";

import AppTable from '../../components/AppTable';

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
            <AppTable apps={apps} />
        </ContentContainer>
    );
};

export default DashboardPage;
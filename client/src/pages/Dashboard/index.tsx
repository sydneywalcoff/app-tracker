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
            <>
                <div className="main-container">
                    <AppTable apps={apps} />

                </div>
                <div className="form-container">

                </div>
            </>
        </ContentContainer>
    );
};

export default DashboardPage;
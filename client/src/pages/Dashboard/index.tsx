import './assets/style.css';

import ContentContainer from "../../components/ContentContainer";
import AppItem from "../../components/AppItem";

const DashboardPage = () => {

    return (
        <ContentContainer className='dashboard'>
            <div className="w-full">
                <div className="section-titles flex justify-between p-2">
                    <div className='date-added title'>Date</div>
                    <div className='job-title title'>Job Title</div>
                    <div className='company title'>Company</div>
                    <div className='stage title'>Stage</div>
                    <div className='location title'>Location</div>
                    <div className='ATS-score title'>ATS Score</div>
                    <div className="spacer title"></div>
                </div>
                <div className="body w-full">
                    <AppItem dateAdded="5/1/2024" jobTitle="Software Engineer" company="Google" stage="preparing" location="Remote" AtsScore={0} />
                </div>
            </div>
        </ContentContainer>
    );
};

export default DashboardPage;
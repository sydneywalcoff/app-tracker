import { useState } from 'react';
import ContentContainer from "../../components/ContentContainer";

import AppTable from '../../components/AppTable';
import TrackerForm from '../../components/TrackerForm';
import SearchBar from '../../components/SearchBar';

import './assets/style.css';

const DashboardPage = () => {
    const [searchText, setSearchText] = useState<string>('');
    const apps = [
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '1'
        },
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '2'
        },
        {
            dateAdded: '5/1/2024',
            jobTitle: "Software Engineer",
            company: "Google",
            stage: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '3'
        },
    ]
    return (
        <ContentContainer className='dashboard flex'>
            <>
                <div className="main-container w-2/3">
                    <div className="preparing">
                        <AppTable apps={apps} />
                    </div>
                    <div className="all-apps mt-12">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        <AppTable apps={apps} />
                    </div>
                </div>
                <div className="form-container ml-4 w-1/3">
                    <TrackerForm />
                </div>
            </>
        </ContentContainer>
    );
};

export default DashboardPage;
import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_MY_APPS } from '../../utils/queries';
import Auth from '../../utils/auth';

import ContentContainer from "../../components/ContentContainer";
import AppTable from '../../components/AppTable';
import TrackerForm from '../../components/TrackerForm';
import SearchBar from '../../components/SearchBar';

import './assets/style.css';

interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    dateApplied: string;
    lastUpdated: string;
}

const DashboardPage = () => {
    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login')
    }

    const { data } = useQuery(QUERY_MY_APPS);
    const [searchText, setSearchText] = useState<string>('');
    let jobs: jobProp[] = data?.myApps || [];
    let jobsInPrep = jobs.filter(n => n.status.toLowerCase() === 'preparing');

    const apps = [
        {
            dateApplied: '5/1/2024',
            jobTitle: "Software Engineer",
            companyName: "Google",
            status: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '1'
        },
        {
            dateApplied: '5/1/2024',
            jobTitle: "Software Engineer",
            companyName: "Google",
            status: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '2'
        },
        {
            dateApplied: '5/1/2024',
            jobTitle: "Software Engineer",
            companyName: "Google",
            status: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '3'
        },
        {
            dateApplied: '5/1/2024',
            jobTitle: "Software Engineer",
            companyName: "Google",
            status: "preparing",
            location: 'remote',
            AtsScore: 0,
            _id: '3'
        },
    ]
    return (
        <ContentContainer className='dashboard flex'>
            <>
                <div className="main-container w-2/3">
                    <div className="top-section flex">
                        <div className="preparing w-1/2 flex flex-col">
                            <h4>Apps in Prep</h4>
                            <AppTable apps={apps} />
                        </div>
                        <div className="stats ml-4 shadow-md w-1/2 rounded-lg p-4">
                            {/* <h4>Today</h4>
                            <p><span></span> Apps Applied to</p> */}
                        </div>
                    </div>
                    <div className="all-apps mt-12">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        <AppTable apps={jobs} />
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
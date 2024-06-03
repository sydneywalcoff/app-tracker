import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_MY_APPS } from '../../utils/queries';
import Auth from '../../utils/auth';
import filterJobsByText from '../../utils/filterJobsByText';

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
    atsScore: number;
}

const DashboardPage = () => {
    const [searchText, setSearchText] = useState<string>('');

    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login')
    }

    const { data } = useQuery(QUERY_MY_APPS);
    let jobs: jobProp[] = data?.myApps || [];
    // TODO: refactor jobsInPrep and jobsInProcess to use a single filter fxn
    let jobsInPrep = jobs.filter(n => n.status.toLowerCase() === 'preparing');
    let jobsInProcess = jobs.filter(n => n.status.toLowerCase() !== 'preparing' && n.status.toLowerCase() !== 'applied' && n.status.toLowerCase() !== 'rejected');

    let focusTitle = jobsInPrep.length > 0 ? 'Apps In Prep' : 'Apps in Process';
    let focusedJobs = jobsInPrep.length > 0 ? jobsInPrep.slice(0,3) : jobsInProcess.slice(0,3);
    // TODO: add solution for no jobsInPrep or jobsInProcess

    // TODO: use searchText to filter jobs

    return (
        <ContentContainer className='dashboard flex'>
            <>
                <div className="main-container w-2/3">
                    <div className="top-section flex">
                        <div className="focus w-1/2 flex flex-col">
                            <h4>{focusTitle}</h4>
                            <AppTable apps={focusedJobs} />
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
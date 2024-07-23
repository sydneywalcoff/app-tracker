import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_MY_APPS } from '../../utils/queries';
import Auth from '../../utils/auth';
import filterJobsByText from '../../utils/filterJobsByText';

import ContentContainer from "../../components/ContentContainer";
import AppTable from '../../components/AppTable';
import TrackerForm from '../../components/TrackerForm';
import SearchBar from '../../components/SearchBar';

import DashboardImg from '../../assets/dashboard-img.svg';

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

interface jobsStateI {
    inPrep: jobProp[],
    inProcess: jobProp[],
    all: jobProp[],
    focus: string
}

const DashboardPage = () => {
    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login');
    }

    const [searchText, setSearchText] = useState<string>('');
    const [jobs, setJobs] = useState<jobsStateI>({
        inPrep: [],
        inProcess: [],
        all: [],
        focus: 'inPrep'
    })

    const { data } = useQuery(QUERY_MY_APPS);

    useEffect(() => {
        let jobsData: jobProp[] = data?.myApps || [];
        let jobsInPrep: jobProp[] = jobsData.filter((n: jobProp) => n.status.toLowerCase() === 'preparing');
        let jobsInProcess: jobProp[] = jobsData.filter((n: jobProp) => n.status.toLowerCase() !== 'preparing' && n.status.toLowerCase() !== 'applied' && n.status.toLowerCase() !== 'rejected');
        let focus: string = jobsInPrep.length > 0 ? 'Apps in Prep' : 'Apps in Process'

        setJobs({
            inProcess: jobsInProcess,
            inPrep: jobsInPrep,
            all: filterJobsByText(searchText, jobsData),
            focus: focus
        })
    }, [data?.myApps, jobs.inPrep.length, searchText])

    return (
        <ContentContainer className='dashboard flex'>
            <>
                <div className="main-container w-2/3">
                    <div className="top-section flex">
                        <div className="focus w-1/2 flex flex-col">
                            <h4>{jobs.focus === 'inPrep' ? 'Apps in Prep' : 'Apps in Process'}</h4>
                            <AppTable apps={jobs.focus === 'inPrep' ? jobs.inPrep : jobs.inProcess} />
                        </div>
                        <div className="dashboard-img ml-4 w-1/2 rounded-lg p-4">
                            <img src={DashboardImg} alt="man sitting working on a computer" />
                        </div>
                    </div>
                    <div className="all-apps mt-12">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        <AppTable apps={jobs.all} />
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
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

import { JobProp } from '../../types/global.types';

import './assets/style.css';

interface JobsStateI {
    inPrep: JobProp[],
    inProcess: JobProp[],
    all: JobProp[],
    focus: string
}

const DashboardPage = () => {
    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login');
    }

    const [searchText, setSearchText] = useState<string>('');
    const [jobs, setJobs] = useState<JobsStateI>({
        inPrep: [],
        inProcess: [],
        all: [],
        focus: 'inPrep'
    })

    const { data, loading } = useQuery(QUERY_MY_APPS);

    useEffect(() => {
        let jobsData: JobProp[] = data?.myApps || [];
        let jobsInPrep: JobProp[] = jobsData.filter((n: JobProp) => n.status.toLowerCase() === 'preparing');
        let jobsInProcess: JobProp[] = jobsData.filter((n: JobProp) => n.status.toLowerCase() !== 'preparing' && n.status.toLowerCase() !== 'applied' && n.status.toLowerCase() !== 'rejected');
        let focus: string = jobsInPrep.length > 0 ? 'Apps in Prep' : 'Apps in Process';

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
                <div className="table-container">
                    <div className="top-section flex">
                        <div className="focus flex flex-col">
                            <h4>{jobs.focus}</h4>
                            <AppTable apps={jobs.focus === 'Apps in Prep' ? jobs.inPrep : jobs.inProcess} loading={loading}/>
                        </div>
                        <div className="dashboard-img ml-4">
                            <img src={DashboardImg} alt="man sitting working on a computer" />
                        </div>
                    </div>
                    <div className="all-apps md:mt-4">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        <AppTable apps={jobs.all} loading={loading} />
                    </div>
                </div>
                <div className="outer-form-container ml-4">
                    <TrackerForm />
                </div>
            </>
        </ContentContainer>
    );
};

export default DashboardPage;
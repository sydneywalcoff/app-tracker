import { useQuery } from '@apollo/client';

import AppCounter from '../components/AppCounter';
import JobScoreAv from '../components/JobScoreAv';

import { QUERY_APPS } from '../utils/queries';

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


const Stats = () => {
    const { data } = useQuery(QUERY_APPS);
    let jobs: jobProp[] = data?.apps;
    return (
        <div className="p-6 w-full">
            <h1 className='text-4xl underline text-gray-900 underline-gray-900 mb-4'>Stats</h1>
            <div className="flex flex-row justify-around">
                <AppCounter apps={jobs} />
                < JobScoreAv apps={jobs}/>
            </div>
        </div>
    );
};

export default Stats;
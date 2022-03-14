import { useQuery } from '@apollo/client';

import AppCounter from '../components/AppCounter';
import JobScoreAv from '../components/JobScoreAv';

import { QUERY_APPS } from '../utils/queries';
import { getWeekDates } from '../utils/dateFormat'

interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    jobScore: number | null;
    dateApplied: string;
    lastUpdated: string;
}


const Stats = () => {
    const { data } = useQuery(QUERY_APPS);
    let jobs: jobProp[] = data?.apps;
    const weekDatesArr =getWeekDates(Date.now());

    return (
        <div className="p-6 w-full">
            <h1 className='text-4xl text-gray-900 mb-4'><span className="underline underline-gray-900">Stats for the week of:</span> {weekDatesArr[0]}</h1>
            <div className="flex flex-row justify-around">
                <AppCounter apps={jobs} />
                <JobScoreAv apps={jobs} thisWeek={weekDatesArr}/>
            </div>
        </div>
    );
};

export default Stats;
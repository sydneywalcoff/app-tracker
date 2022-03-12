import { dateFormat, getWeekDates } from '../utils/dateFormat'

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

interface JobScoreAvInterface {
    apps: jobProp[]
}

const JobScoreAv = ({ apps } : JobScoreAvInterface) => {
    const thisWeek = getWeekDates(Date.now())
    console.log(thisWeek)
    
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col align-center p-4 my-4 w-1/5">
            <h1 className='text-center text-xl'>Job Score</h1>
        </div>
    );
};

export default JobScoreAv
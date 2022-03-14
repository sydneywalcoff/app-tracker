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

interface JobScoreAvInterface {
    apps: jobProp[],
    thisWeek: string[]
}

const JobScoreAv = ({ apps, thisWeek } : JobScoreAvInterface) => {
    const thisWeekApps = apps.filter(app => {
        return thisWeek.includes(app.dateApplied);
    });
    let jobScoreAverageArr: number[] =[];
    thisWeekApps.forEach(app => {
        if(app.jobScore) {
            jobScoreAverageArr.push(app.jobScore)
        }
    })
    let jobScoreAverage: number | string = jobScoreAverageArr.reduce((a,b) => {
        return a + b;
    });
    jobScoreAverage = (jobScoreAverage/(jobScoreAverageArr.length)).toFixed();

    let colorClass;
    if(parseInt(jobScoreAverage) >= 70) {
        colorClass = 'text-green-800'
    } else if (70 > parseInt(jobScoreAverage) && parseInt(jobScoreAverage) >=60) {
        colorClass = 'text-orange-800'
    } else {
        colorClass = 'text-red-800'
    }
    
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col align-center p-4 my-4 ">
            <h2 className='text-center'>Job Score Average</h2>
            <h1 className={`text-center text-6xl ${colorClass}` }>{jobScoreAverage}%</h1>
        </div>
    );
};

export default JobScoreAv
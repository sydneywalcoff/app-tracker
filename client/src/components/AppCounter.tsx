import dateFormat from '../utils/dateFormat';

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

interface appCounterInterface {
    apps: jobProp[]
}

const AppCounter = ({ apps }: appCounterInterface ) => {
    const todaysDate = dateFormat(Date.now());
    let todaysApps = apps.filter(el => el.dateApplied == todaysDate);
    let numOfAppsToday = todaysApps.length;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col align-center p-4 my-4">
            <h2 className="text-center text-sm">you've applied for</h2>
            <h1 className="text-6xl text-center">{numOfAppsToday}</h1>
            <h2 className="text-center text-sm">applications today</h2>
        </div>
    );
};

export default AppCounter;
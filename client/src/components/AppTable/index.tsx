import { useState } from 'react';

import AppItem from "../../components/AppItem";
import Button from '../Button';

import './assets/style.css';

interface AppItemI {
    dateApplied: string;
    jobTitle: string;
    companyName: string;
    status: string;
    location: string;
    AtsScore?: number;
    _id: string
}

interface AppTableI {
    apps: AppItemI[]
}

type jobStatusObj = {
    [key: string]: AppItemI[]
}

const AppTable = (params: AppTableI) => {
    const [firstShownApp, setFirstShownApp] = useState<number>(0);
    const [lastShownApp, setLastShownApp] = useState<number>(9);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { apps } = params;
    let jobs = apps;
    let numJobs: number = jobs.length || 0;
    let totalPages: number | undefined = numJobs > 10 ? Math.ceil(numJobs / 10) : undefined;

    const statusArr: string[] = ["offer", "first interview", "technical", "phone screen", "preparing", "applied", "rejected"];

    const sortByStatus = () => {
        const jobStatusObj: jobStatusObj = {};
        jobs.forEach(app => {
            const { status } = app;
            if (!jobStatusObj[status]) {
                jobStatusObj[status] = [app];
                return;
            }
            jobStatusObj[status] = [app, ...jobStatusObj[status]];

        })
        let sortedJobs: AppItemI[][] = [];
        statusArr.forEach(status => {
            if (jobStatusObj[status]) {
                sortedJobs.push(jobStatusObj[status])
            }
        })
        return sortedJobs.flat();
    }
    jobs = sortByStatus();

    const pageCounter = () => {
        const handleBack = () => {
            setCurrentPage(currentPage - 1);
            setFirstShownApp(firstShownApp - 10);
            setLastShownApp(lastShownApp - 10);
        }
        const handleNext = () => {
            setCurrentPage(currentPage + 1);
            setFirstShownApp(firstShownApp + 10);
            setLastShownApp(lastShownApp + 10);
        }
        return (
            <div className="page-counter-wrap">
                <div className="page-buttons">
                    {currentPage !== 1 &&
                        <Button
                            type='button'
                            onClick={handleBack}
                            text='prev'
                            classes="prev"
                        ></Button>

                    }
                    {currentPage !== totalPages && currentPage !== 1 && '/'}
                    {currentPage !== totalPages &&
                        <Button
                            type='button'
                            onClick={handleNext}
                            text='next'
                            classes="next"
                        ></Button>}
                </div>
                <div className="pages-counter">
                    <p className="curr">{currentPage}</p> / <p className="total">{totalPages} </p>
                </div>
            </div>
        );
    }

    return (
        <table className="w-full divide-y flex flex-col">
            <thead className="w-full">
                <tr className="section-titles flex justify-between p-1 w-full">
                    <th className='date-added title'><p>Date</p></th>
                    <th className='job-title title'><p>Job Title</p></th>
                    <th className='company title'><p>Company</p></th>
                    <th className='stage title'><p>Stage</p></th>
                    <th className='location title'><p>Location</p></th>
                    <th className='ATS-score title'><p>ATS Score</p></th>
                    <th className="spacer title"></th>
                </tr>
            </thead>
            <tbody className="body w-full">
                {jobs.map((app) => <AppItem _id={app._id} dateAdded={app.dateApplied} jobTitle={app.jobTitle} company={app.companyName} stage={app.status} location={app.location} AtsScore={app.AtsScore} />)}
            </tbody>
            {numJobs > 10 && pageCounter()}
        </table>
    );
};

export default AppTable;
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_MY_APPS } from "../../utils/queries";
import { hasBeenGhosted } from '../../utils/dateFormat';
import Auth from '../../utils/auth';

import './assets/style.css';
import arrow from './assets/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg';

import ContentContainer from "../../components/ContentContainer";
import StageBadge from "../../components/StageBadge";
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';

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

type jobStatusObj = {
    [key: string]: jobProp[]
}

const TrackerTable = () => {
    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login')
    }

    const [searchText, setSearchText] = useState<string>('');
    const [activeApps, setActiveApps] = useState<boolean>(true);
    const { loading, error, data } = useQuery(QUERY_MY_APPS);
    let jobs: jobProp[] = data?.myApps || [];
    if (loading) {
        return (
            <ContentContainer>
                <h1>Loading....</h1>
            </ContentContainer>
        )
    }

    if (jobs.length === 0) {
        return (
            <ContentContainer>
                <>
                    <h1>No Jobs Tracked yet ¯\_(ツ)_/¯</h1>
                    <p>Click <a href="./tracker">here to go back</a> to the tracker</p>
                </>
            </ContentContainer>
        );
    }

    const filterByStatus = () => {
        const jobStatusObj: jobStatusObj = {};
        const statusArr: string[] = ["first interview", "technical", "phone screen", "preparing", "applied", "rejected"];
        jobs.forEach(app => {
            const { status } = app;
            if (!jobStatusObj[status]) {
                jobStatusObj[status] = [app];
                return;
            }
            jobStatusObj[status] = [...jobStatusObj[status], app];

        })
        let sortedJobs: jobProp[][] = [];
        statusArr.forEach(status => {
            if (jobStatusObj[status]) {
                sortedJobs.push(jobStatusObj[status])
            }
        })
        return sortedJobs.flat();
    }
    jobs = filterByStatus();

    if (searchText) {
        let searchResults: Set<jobProp> = new Set();
        jobs.filter(job => {
            const {
                jobTitle,
                location,
                companyName
            } = job;
            if (companyName.toLowerCase().includes(searchText.toLowerCase()) || location.toLowerCase().includes(searchText.toLowerCase()) || jobTitle.toLowerCase().includes(searchText.toLowerCase())) {
                searchResults.add(job)
            }
        })
        jobs = Array.from(searchResults)
    }

    if (activeApps) {
        let activeApps: Set<jobProp> = new Set();
        jobs.filter(job => {
            const { status, lastUpdated } = job;
            const isGhosted = hasBeenGhosted(lastUpdated);
            if (status !== 'rejected' && !isGhosted) {
                activeApps.add(job);
            }
        })
        jobs = Array.from(activeApps);
    }


    return (
        <ContentContainer className='applied'>
            <>
                <div className="flex justify-between">
                    <SearchBar searchText={searchText} setSearchText={setSearchText} />
                    <Filter active={activeApps} setActiveApps={setActiveApps} />
                </div>
                <div className="table-container shadow">
                    <table className="w-full divide-y">
                        <thead className="w-full">
                            <tr className="w-full">
                                <th scope="col">
                                    Date Applied
                                </th>
                                <th scope="col">
                                    Position
                                </th>
                                <th scope="col">
                                    Company
                                </th>
                                <th scope="col">
                                    Stage
                                </th>
                                <th scope="col">
                                    Location
                                </th>
                                <th scope="col" className="relative"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {jobs.map((job: jobProp, i: number) => (
                                <tr key={i}>
                                    <td className="whitespace-nowrap">
                                        <p>
                                            {job.dateApplied}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {job.jobTitle}
                                        </p>
                                    </td>
                                    <td className="text-gray-500">
                                        <p>{job.companyName}</p>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <StageBadge stage={job.status} />
                                    </td>
                                    <td>
                                        <p>{job.location}</p>
                                    </td>
                                    <td className="whitespace-nowrap text-right font-medium">
                                        <Link
                                            to={job._id}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            More
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mobile-table">
                    {jobs.map((job: jobProp, i: number) => (
                        <div className="job-item" key={i}>
                            <div className="top-container">
                                <div className="text">
                                    <p>{job.jobTitle}</p> - <p>{job.companyName}</p>
                                </div>
                                <StageBadge stage={job.status} />
                            </div>
                            <div className="bottom-container">
                                <div className="text">
                                    <p><span>applied:</span> {job.dateApplied}</p>
                                    <p><span>location:</span> {job.location}</p>
                                </div>
                                <Link
                                    to={job._id}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    <img src={arrow} className="arrow"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </ContentContainer>
    );
};

export default TrackerTable;

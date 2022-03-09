import React, { useState, ChangeEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../utils/localStorage";
import { useQuery } from "@apollo/client";
import { QUERY_APPS } from "../utils/queries";

import StageBadge from "../components/StageBadge";
import SearchBar from '../components/SearchBar';

interface jobProp {
  _id: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  location: string;
  status: string;
  dateApplied: string;
}

type jobStatusObj = {
  [key: string]: jobProp[]
}

const TrackerTable = () => {
  const [searchText, setSearchText] = useState<string>('');
  const { data } = useQuery(QUERY_APPS);
  let jobs: jobProp[] = data?.apps || [];

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
        status,
        location,
        companyName
      } = job;
      if (companyName.toLowerCase().includes(searchText.toLowerCase()) || location.toLowerCase().includes(searchText.toLowerCase()) || jobTitle.toLowerCase().includes(searchText.toLowerCase())) {
        searchResults.add(job)
      }
    })
    jobs = Array.from(searchResults)
  }

  return (
    <div className="flex flex-col mx-auto my-8 min-w-2/3">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Applied
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stage
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th scope="col" className="relative px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job: jobProp, i: number) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <p className="text-sm text-gray-900">
                          {job.dateApplied}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {job.jobTitle}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {job.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StageBadge stage={job.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default TrackerTable;

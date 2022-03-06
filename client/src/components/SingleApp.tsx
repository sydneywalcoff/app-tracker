import React, { useState } from "react";
import { getSingleJob } from "../utils/localStorage";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_SINGLE_APP } from "../utils/queries";
import { DELETE_APP } from "../utils/mutations";

import StageBadge from "./StageBadge";
import Modal from "./Modal";
import Notes from "./Notes";

const SingleApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  let { jobId } = useParams();
  let { data } = useQuery(QUERY_SINGLE_APP, {
    variables: {
      id: jobId,
    },
  });
  const [deleteApp] = useMutation(DELETE_APP);
  const job = data?.app || {};

  const handleEdit = () => {
    setModalOpen(!modalOpen);
  };

  const handleDelete = async () => {
    await deleteApp({
      variables: { id: jobId },
    });
    window.location.assign("/applied");
  };

  const quickApplyText = () => {
    if (job.quickApply) {
      return "yes";
    }
    return "no";
  };

  if (job.length === 0) {
    return (
      <h1 className="mx-auto my-8 text-3xl">Sorry! Something went wrong. </h1>
    );
  }
  if (!job) {
    return (
      <h1 className="mx-auto my-8 text-3xl">
        Sorry! No application with that ID.{" "}
      </h1>
    );
  }
  return (
    <section className="p-9 w-screen">
      <div className="flex justify-center">
        <div className="px-5 basis-3/4">
          <h1 className="text-4xl font-bold mb-2">{job.jobTitle}</h1>
          <h2 className="text-xl mb-5">{job.companyName}</h2>
          <h3 className="text-3xl mb-2">Job Description</h3>
          <p className="text-md whitespace-pre-wrap">{job.jobDescription}</p>
        </div>
        <div className="px-5 basis-1/4">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleEdit}
              className="inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
          <div>
            <h4 className="mb-3">
              <span className="font-bold">location: </span>
              {job.location}{" "}
            </h4>
            <h4 className="mb-3">
              <span className="font-bold">stage: </span>{" "}
              <StageBadge stage={job.status} />{" "}
            </h4>
            <h4 className="mb-3">
              <span className="font-bold">date applied: </span>
              {job.dateApplied}{" "}
            </h4>
            <h4 className="mb-3">
              <span className="font-bold">quick apply?: </span>
              {quickApplyText()}{" "}
            </h4>
            {job.jobScore > 0 && (
              <h4 className="mb-3">
                <span className="font-bold">JobScan Score: </span>
                {job.jobScore}{" "}
              </h4>
            )}
          </div>
        </div>
      </div>
      <div className="flex px-5 mt-10">
        <div className="basis-1/2">
          <h3 className="text-2xl mb-2">Questions</h3>
          <ul className="px-5">
            <li className="list-disc mb-3">
              What is the breakdown of the team and who does what?
            </li>
            <li className="list-disc mb-3">
              What are you most excited about having a new person in this role?
            </li>
            <li className="list-disc mb-3">
              What is your biggest pain point? How will this role alleviate
              that?
            </li>
            <li className="list-disc mb-3">
              What advice would you give someone through the rest of the
              interviewing process?
            </li>
            <li className="list-disc mb-3">
              What is the rest of the hiring process?
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/2">
          <Notes notes={job.notes}/>
        </div>
      </div>
      {modalOpen && <Modal job={job} setModalOpen={setModalOpen} />}
    </section>
  );
};

export default SingleApp;

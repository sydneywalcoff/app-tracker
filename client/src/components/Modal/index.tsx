import React, { SetStateAction, Dispatch } from "react";
import "./styles.css";
import StageBadge from "../StageBadge";

interface jobProp {
  id: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  location: string;
  stage: string;
  dateApplied: string;
}

interface ModalProps {
  job: jobProp;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ job, setModalOpen }: ModalProps) => {
  const {
    jobTitle,
    dateApplied,
    companyName,
    stage,
    jobDescription,
    location,
  } = job;
  return (
    <>
      <div className="darkBG" />
      <div className="centered modal p-4">
        <div className="flex justify-between">
          <h3 className="text-3xl pl-4">Edit Details:</h3>
          <p className="flex" onClick={() => setModalOpen(false)}>
            x
          </p>
        </div>
        <div className="flex p-4">
          <div className="flex-col basis-3/4 mr-3">
            <div className="my-3">
                <label htmlFor="job-title" className="font-bold mr-2 pr-1">Title:</label>
                <input
                  name="job-title"
                  className="mb-2 p-1 border-solid border-2"
                  placeholder={jobTitle}
                />
                <label htmlFor="company-name" className="font-bold m-2 pr-1">Company:</label>
                <input
                  className="mb-2 p-1 border-solid border-2"
                  name="company-name"
                  placeholder={companyName}
                />
            </div>
            <h3 className="font-bold mb-2">Job Description</h3>
            <textarea
              className="whitespace-pre-wrap p-1 w-full h-full border-solid border-2"
              placeholder={jobDescription}
            />
          </div>
          <div className="basis-1/4">
            <h4 className="mb-3">
              <span className="font-bold">date applied: </span>
              {dateApplied}{" "}
            </h4>
            <h4 className="mb-3">
              <span className="font-bold">location: </span>
              {location}{" "}
            </h4>
            <h4 className="mb-3">
              <span className="font-bold">stage: </span>{" "}
              <StageBadge stage={stage} />{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

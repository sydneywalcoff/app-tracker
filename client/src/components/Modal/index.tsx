import React, { SetStateAction, Dispatch, useState, ChangeEvent } from "react";
import "./styles.css";
import StageBadge from "../StageBadge";

interface jobProp {
    id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    dateApplied: string;
}

interface ModalProps {
    job: jobProp;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ job, setModalOpen }: ModalProps) => {
    const {
        id,
        jobTitle,
        dateApplied,
        companyName,
        status,
        jobDescription,
        location,
    } = job;

    const [editJobForm, setEditJobForm] = useState({
        id: id,
        jobTitle: jobTitle,
        dateApplied: dateApplied,
        companyName: companyName,
        status: status,
        jobDescription: jobDescription,
        location: location
    })

    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
        let { value, name } = e.target;
        switch(name) {
            case 'job-title':
                name = 'jobTitle';
                break;
            case 'company-name':
                name = 'companyName';
                break;
            case 'job-description':
                name = 'jobDescription';
                break;
            case 'quick-apply':
                // console.log('quickApply', e.currentTarget.checked);
                break;
            default: 
                break;
        }
        console.log(name, value)
        setEditJobForm({...editJobForm, [name]: value })
    };

    const submitHandler = () => {
        console.log(editJobForm);
    };

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
                            <label htmlFor="job-title" className="font-bold mr-2 pr-1">
                                Title:
                            </label>
                            <input
                                name="job-title"
                                className="mb-2 p-1 border-solid border-2"
                                placeholder={jobTitle}
                                onChange={changeHandler}
                            />
                            <label htmlFor="company-name" className="font-bold m-2 pr-1">
                                Company:
                            </label>
                            <input
                                className="mb-2 p-1 border-solid border-2"
                                name="company-name"
                                placeholder={companyName}
                                onChange={changeHandler}
                            />
                        </div>
                        <h3 className="font-bold mb-2">Job Description</h3>
                        <textarea
                            className="whitespace-pre-wrap p-1 w-full h-full border-solid border-2"
                            placeholder={jobDescription}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex-col basis-1/4">
                        <div>
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
                                <StageBadge stage={status} />{" "}
                            </h4>
                        </div>
                        <button type="button" onClick={submitHandler} className="mb-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

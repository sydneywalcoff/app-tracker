import { SetStateAction, Dispatch, useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import "./assets/styles.css";

import Button from '../Button';
import StageDropdown from "../StageDropdown";

import { EDIT_APP } from "../../utils/mutations";
import { QUERY_SINGLE_APP } from '../../utils/queries';

interface jobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    locationObj: LocationI;
    status: string;
    dateApplied: string;
    quickApply: boolean;
    jobScore: number;
    link: string;
}

interface LocationI {
    workStyle: string;
    officeLocation: string;
}

interface ModalProps {
    job: jobProp;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ job, setModalOpen }: ModalProps) => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    const [editApp] = useMutation(EDIT_APP, {
        update(cache, { data: { editApp } }) {
            try {
                cache.updateQuery({ query: QUERY_SINGLE_APP, variables: { id: job._id } }, ({ app }) => ({
                    app
                }))
            } catch (e) {
                console.error(e)
            }
        }
    });
    const {
        _id,
        jobTitle,
        dateApplied,
        companyName,
        status,
        jobDescription,
        location,
        locationObj,
        jobScore,
        link
    } = job;

    const [editJobForm, setEditJobForm] = useState({
        id: _id,
        jobTitle,
        dateApplied,
        companyName,
        status,
        jobDescription,
        location,
        jobScore,
        link,
        officeLocation: locationObj.officeLocation,
        workStyle: locationObj.workStyle,
    });

    const changeHandler = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLTextAreaElement>
            | ChangeEvent<HTMLSelectElement>
    ) => {
        let { value, name } = e.target;
        switch (name) {
            case "job-title":
                name = "jobTitle";
                break;
            case "company-name":
                name = "companyName";
                break;
            case "job-description":
                name = "jobDescription";
                break;
            case "stage":
                name = "status";
                break;
            case "job-score":
                name = "jobScore";
                break;
            case 'job-url':
                name = 'link';
                break;
            case 'office-location':
                name = 'officeLocation'
                break;
            case 'work-style':
                name = 'workStyle'
                break;
            default:
                break;
        }
        if (name === 'jobScore') {
            setEditJobForm({ ...editJobForm, [name]: parseInt(value) });
            return;
        }
        setEditJobForm({ ...editJobForm, [name]: value });
    };


    const handleDropDownChange = (newStage: string) => {
        let oldStage = job.status;
        if (oldStage !== newStage) {
            setEditJobForm({ ...editJobForm, status: newStage });
            return;
        }
    };

    const closeModal = () => {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        setModalOpen(false);
    }

    // if we want to add a 'are you sure message' about adding the same status twice, it would go in the submitHandler
    const submitHandler = async () => {
        try {
            if (status !== editJobForm.status) {
                await editApp({
                    variables: {
                        ...editJobForm
                    },
                });
            } else {
                let { status: _, ...temp } = editJobForm;
                await editApp({
                    variables: {
                        ...temp
                    },
                });
            }
            closeModal();
        } catch(e) {
            console.error(e);
        }
    };


    return (
        <>
            <div className="darkBG" />
            <div className="centered modal p-4">
                <div className="flex justify-between">
                    <h3 className="text-3xl pl-4">Edit Details:</h3>
                    <p className="flex close-btn" onClick={closeModal}>
                        x
                    </p>
                </div>
                <div className="flex p-4 modal-content">
                    <div className="flex-col w-full flex basis-3/4 mr-3">
                        <div className="my-3 top-details flex">
                            <div className="item">
                                <label htmlFor="job-title" className="font-bold mr-2 pr-1">
                                    Title:
                                </label>
                                <input
                                    name="job-title"
                                    className="mb-2 p-1 border-solid border-2"
                                    value={editJobForm.jobTitle}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="company-name" className="font-bold m-2 pr-1">
                                    Company:
                                </label>
                                <input
                                    className="mb-2 p-1 border-solid border-2"
                                    name="company-name"
                                    value={editJobForm.companyName}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <label htmlFor="job-description" className="font-bold mb-2">
                            Job Description
                        </label>
                        <textarea
                            className="whitespace-pre-wrap p-1 w-full h-full border-solid border-2 job-description"
                            name="job-description"
                            value={editJobForm.jobDescription}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="basis-1/4">
                        <div className="flex-col flex  details-container">
                            <div className="detail-row">
                                <div className="mb-3 detail date-applied">
                                    <span className="font-bold">date applied: </span>
                                    {dateApplied}{" "}
                                </div>
                                <div className="mb-3 detail">
                                    <label htmlFor="office-location" className="font-bold">
                                        office location:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="office-location"
                                        id="office-location"
                                        className="mt-1 pl-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border border-gray-300 rounded-md w-full"
                                        value={editJobForm.officeLocation}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="mb-3 detail">
                                    <label htmlFor="work-style" className="font-bold">
                                        work style:{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="work-style"
                                        id="work-style"
                                        className="mt-1 pl-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border border-gray-300 rounded-md w-full"
                                        value={editJobForm.workStyle}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="mb-3 detail">
                                    <label htmlFor="job-score" className="font-bold">Job Score:</label>
                                    <input type="number" name="job-score" className="mt-1 pl-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border border-gray-300 rounded-md w-full" onChange={changeHandler} defaultValue={editJobForm.jobScore} />
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="mb-3 detail">
                                    <StageDropdown options={['preparing', 'rejected', 'applied', 'phone screen', 'first interview', 'technical', 'offer']} onStageChange={handleDropDownChange} selectedStage={editJobForm.status} />
                                </div>
                                <div className="mb-3 detail">
                                    <label htmlFor="job-url" className="font-bold">Link</label>
                                    <input type="text" name="job-url" className="mt-1 pl-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border border-gray-300 rounded-md w-full" onChange={changeHandler} defaultValue={editJobForm.link} />
                                </div>
                            </div>
                        </div>
                        <Button
                            type="button"
                            onClick={submitHandler}
                            text="Save"
                            classes="blue"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import { ADD_APP } from "../../utils/mutations";

import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Button from '../Button';
import StageDropdown from "../StageDropdown";
import RadioBtnList from "../RadioBtnList";

import './assets/style.css';
import { QUERY_MY_APPS } from "../../utils/queries";

const TrackerForm = () => {
    let defaultFormState = {
        jobTitle: "",
        companyName: "",
        locationObj: {
            officeLocation: "",
            workStyle: "hybrid"
        },
        jobDescription: "",
        status: "preparing",
        source: "",
        salary: "",
        jobScore: 0,
        link: "",
    };
    const [formState, setFormState] = useState(defaultFormState);
    const [inputError, setInputError] = useState("");
    const [isCleared, setIsCleared] = useState(false);

    const [addApp, { loading }] = useMutation(ADD_APP, {
        update(cache, { data: { addApp } }) {
            try {
                cache.updateQuery({ query: QUERY_MY_APPS }, ({ myApps }) => ({
                    myApps: {
                        ...myApps,
                        addApp
                    }
                }))
            } catch (error) {
                console.error(error);
            }
        }
    });

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { jobTitle, companyName, locationObj: { workStyle, officeLocation }, jobDescription } = formState;
        if (
            jobTitle.length === 0 ||
            companyName.length === 0 ||
            jobDescription.length === 0
        ) {
            setInputError("please fix required fields");
            return;
        }
        try {
            await addApp({
                variables: {
                    ...formState,
                    workStyle,
                    officeLocation
                },
            });
            clearForm();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDropDownChange = (newStage: string) => {
        setFormState({ ...formState, status: newStage })
    };

    const handleChange = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLTextAreaElement>
            | ChangeEvent<HTMLSelectElement>
    ) => {
        let { name, value } = e.target;
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
            case "ats-score":
                name = "jobScore";
                break;
            case "stage":
                name = "status";
                break;
            case "job-url":
                name = "link";
                break;
            default:
                break;
        }
        if (name === "jobScore") {
            let scoreNum = parseInt(value, 10);
            scoreNum = Number.isNaN(scoreNum) ? 0 : scoreNum;
            setFormState({ ...formState, [name]: scoreNum });
            return;
        }

        if (name === 'office-location') {
            setFormState({
                ...formState, locationObj: {
                    ...formState.locationObj,
                    officeLocation: value
                }
            });
            return;
        }

        if (
            formState.jobTitle.length !== 0 &&
            formState.companyName.length !== 0 &&
            formState.jobDescription.length !== 0
        ) {
            setInputError("");
        }

        setFormState({ ...formState, [name]: value });
    };

    const handleRadioBtnChange = (newWorkStyle: string) => {
        setFormState({
            ...formState, locationObj: {
                ...formState.locationObj,
                workStyle: newWorkStyle
            }
        })
    };

    const clearForm = () => {
        setFormState(defaultFormState);
        setIsCleared(true);
        setInputError("");
    };

    let radioBtnOptions = ['on-site', 'hybrid', 'remote'];

    return (
        <div className="tracker form-container flex">
            <form action="#" className="form shadow" onSubmit={handleSubmit}>
                <div className="content">
                    <h1>Track.</h1>
                    <p>Fields with * are required.</p>
                    <div className="form-content">
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="job-title"
                                labelTitle="Job title*"
                                value={formState.jobTitle}
                                required
                                isCleared={isCleared}
                                setIsCleared={setIsCleared}
                            />
                        </div>
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="company-name"
                                labelTitle="Company name*"
                                value={formState.companyName}
                                required
                                isCleared={isCleared}
                                setIsCleared={setIsCleared}
                            />
                        </div>
                        <div className="input-container location">
                            <TextInput
                                onChange={handleChange}
                                name="office-location"
                                labelTitle="Office Location"
                                value={formState.locationObj.officeLocation}
                            />
                            <RadioBtnList options={radioBtnOptions} onStyleChange={handleRadioBtnChange} selected={formState.locationObj.workStyle} />
                        </div>
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="ats-score"
                                labelTitle="ATS score"
                                value={formState.jobScore}
                            />
                        </div>
                        <div className="dropdown-container">
                            <StageDropdown selectedStage={formState.status} onStageChange={handleDropDownChange} options={['preparing', 'applied']} classes="drop-shadow-md" />
                        </div>
                        <div className="input-container link">
                            <TextInput
                                onChange={handleChange}
                                name="job-url"
                                labelTitle="Link"
                                value={formState.link}
                            />
                        </div>
                        <div className="input-container source">
                            <TextInput
                                onChange={handleChange}
                                name="source"
                                labelTitle="Source"
                                value={formState.source}
                            />
                        </div>
                        <div className="input-container salary">
                            <TextInput
                                onChange={handleChange}
                                name="salary"
                                labelTitle="Salary"
                                value={formState.salary}
                            />
                        </div>
                        <div className="textArea-container">
                            <TextArea onChange={handleChange} name="job-description" labelText="Job description*" value={formState.jobDescription} required isCleared={isCleared} setIsCleared={setIsCleared}
                            />
                        </div>
                        <div className="btn-container w-full justify-end flex">
                            <Button text="clear" classes="clear-btn" onClick={clearForm} type="button" />
                            <Button text={loading ? 'loading...' : 'save'} classes="primary drop-shadow-md" type="submit" />
                        </div>
                    </div>
                    {inputError && (
                        <p className="error-text mt-4 text-center">{inputError}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TrackerForm;

import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import { ADD_APP } from "../../utils/mutations";
import Auth from '../../utils/auth';

import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Button from '../Button';
import StageDropdown from "../StageDropdown";
import RadioBtnList from "../RadioBtnList";

import './assets/style.css';

const TrackerForm = () => {
    const [formState, setFormState] = useState({
        jobTitle: "",
        companyName: "",
        location: {
            officeLocation: "",
            workStyle: "hybrid"
        },
        jobDescription: "",
        status: "preparing",
        source: "",
        salary: "",
        jobScore: 0,
        link: "",
    });
    const [inputError, setInputError] = useState("");
    const [addApp] = useMutation(ADD_APP);

    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login')
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { jobTitle, companyName, location: { workStyle, officeLocation }, jobDescription } = formState;
        if (
            jobTitle.length === 0 ||
            companyName.length === 0 ||
            jobDescription.length === 0
        ) {
            setInputError("All fields are required :(");
            return;
        }
        try {
            console.log(formState)
            // await addApp({
            //     variables: {
            //         ...formState,
            // quickApply: checkboxState, // remove this
            //     },
            // });
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
        // if (!value.length) {
        //     setInputError(`${inputName} is required!`);
        //     return;
        // }
        if (name === "jobScore") {
            const scoreNum = parseInt(value, 10);
            setFormState({ ...formState, [name]: scoreNum });
            return;
        }

        if (name === 'office-location') {
            setFormState({ ...formState, location: {
                ...formState.location,
                officeLocation: value
            }});
            return;
        }

        setFormState({ ...formState, [name]: value });
    };

    const handleRadioBtnChange = (newWorkStyle: string) => {
        setFormState({
            ...formState, location: {
                ...formState.location,
                workStyle: newWorkStyle
            }
        })
    };

    let radioBtnOptions = ['on-site', 'hybrid', 'remote'];

    return (
        <div className="tracker form-container flex">
            <form action="#" className="form shadow" onSubmit={handleSubmit}>
                <div className="content">
                    <h1>Track.</h1>
                    <p>All fields with a * are required.</p>
                    <div className="form-content">
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="job-title"
                                labelTitle="Job title*"
                            />
                        </div>
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="company-name"
                                labelTitle="Company name*"
                            />
                        </div>
                        <div className="input-container location">
                            <TextInput
                                onChange={handleChange}
                                name="office-location"
                                labelTitle="Office Location"
                            />
                            <RadioBtnList options={radioBtnOptions} onStyleChange={handleRadioBtnChange} selected={formState.location.workStyle} />
                        </div>
                        <div className="input-container">
                            <TextInput
                                onChange={handleChange}
                                name="ats-score"
                                labelTitle="ATS score"
                            />
                        </div>
                        <div className="dropdown-container">
                            <StageDropdown selectedStage={formState.status} onStageChange={handleDropDownChange} options={['preparing', 'applied']} />
                        </div>
                        <div className="input-container link">
                            <TextInput
                                onChange={handleChange}
                                name="job-url"
                                labelTitle="Link"
                            />
                        </div>
                        <div className="input-container source">
                            <TextInput
                                onChange={handleChange}
                                name="source"
                                labelTitle="Source"
                            />
                        </div>
                        <div className="input-container salary">
                            <TextInput
                                onChange={handleChange}
                                name="salary"
                                labelTitle="Salary"
                            />
                        </div>
                        <div className="textArea-container">
                            <TextArea onChange={handleChange} name="job-description" labelText="Job description*" />
                        </div>
                        <div className="btn-container w-full justify-end flex">
                            <Button text="Save" classes="primary drop-shadow-md" type="submit" />
                        </div>
                    </div>
                    {inputError && (
                        <p className="text-red-700 mt-2">{inputError}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TrackerForm;

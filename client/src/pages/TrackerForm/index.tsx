import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import { ADD_APP } from "../../utils/mutations";
import Auth from '../../utils/auth';

import ContentContainer from "../../components/ContentContainer";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Button from '../../components/Button';
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";

import './assets/style.css';

const TrackerFormPage = () => {
    const [formState, setFormState] = useState({
        jobTitle: "",
        companyName: "",
        location: "",
        jobDescription: "",
        status: "preparing",
        jobScore: 0,
    });
    const [checkboxState, setCheckboxState] = useState(false);
    const [inputError, setInputError] = useState("");
    const [addApp] = useMutation(ADD_APP);

    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        window.location.assign('/login')
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { jobTitle, companyName, location, jobDescription } = formState;
        if (
            jobTitle.length === 0 ||
            companyName.length === 0 ||
            location.length === 0 ||
            jobDescription.length === 0
        ) {
            setInputError("All fields are required :(");
            return;
        }
        try {
            await addApp({
                variables: {
                    ...formState,
                    quickApply: checkboxState,
                },
            });
            window.location.assign('/applied')
        } catch (err) {
            console.error(err);
        }
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxState(!checkboxState);
    };

    const handleChange = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLTextAreaElement>
            | ChangeEvent<HTMLSelectElement>
    ) => {
        let { name, value } = e.target;
        let inputName = name.charAt(0).toUpperCase() + name.slice(1);
        switch (name) {
            case "job-title":
                name = "jobTitle";
                inputName = "Job title";
                break;
            case "company-name":
                name = "companyName";
                inputName = "Company name";
                break;
            case "job-description":
                name = "jobDescription";
                inputName = "Job description";
                break;
            case "job-score":
                name = "jobScore";
                inputName = "Job Score";
                break;
            case "stage":
                name = "status";
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

        setFormState({ ...formState, [name]: value });
    };

    return (
        <ContentContainer>
            <div className="flex-col tracker">
                <div className="mt-10 sm:mt-0">
                    <div className="flex">
                        <div className="how-to">
                            <h1>How to Use</h1>
                            <div className="use-list-container">
                                <div className="use-tip">
                                    <h2 className="use-title">Basic Info</h2>
                                    <div className="use-answer"></div>
                                </div>
                                <div className="use-tip">
                                    <h2 className="use-title">Location</h2>
                                    <div className="use-answer"></div>
                                </div>
                                <div className="use-tip">
                                    <h2 className="use-title">Stage</h2>
                                    <div className="use-answer"></div>
                                </div>
                                <div className="use-tip">
                                    <h2 className="use-title">JobScan Score</h2>
                                    <div className="use-answer"></div>
                                </div>
                                <div className="use-tip">
                                    <h2 className="use-title">Job Description</h2>
                                    <div className="use-answer"></div>
                                </div>
                                <div className="use-tip">
                                    <h2 className="use-title">Quick Apply</h2>
                                    <div className="use-answer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <form action="#" className="form" onSubmit={handleSubmit}>
                                <div className="overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 sm:p-6 flex flex-col shadow">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3 flex flex-col">
                                                <TextInput 
                                                    onChange={handleChange} 
                                                    labelTitle="job title"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 flex flex-col">
                                                <TextInput 
                                                    onChange={handleChange} 
                                                    labelTitle="company name"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 flex-col flex">
                                                <TextInput 
                                                    onChange={handleChange} 
                                                    labelTitle="location"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 flex-col flex">
                                                <TextInput 
                                                    onChange={handleChange} 
                                                    labelTitle="jobScan Score"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                               <Dropdown onChange={handleChange} />
                                            </div>

                                            <div className="col-span-6">
                                                <TextArea onChange={handleChange} labelText="job description"/>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 inline-flex align-items">
                                               <Checkbox onChange={handleCheckboxChange} classes="ml-3"/>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 inline-flex "><Button text="Save" type="submit"/></div>
                                        </div>
                                        {inputError && (
                                            <p className="text-red-700 mt-2">{inputError}</p>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* How to Use Section */}
            
        </ContentContainer>
    );
};

export default TrackerFormPage;

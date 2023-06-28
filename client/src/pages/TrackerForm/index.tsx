import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import { ADD_APP } from "../../utils/mutations";
import Auth from '../../utils/auth';

import ContentContainer from "../../components/ContentContainer";
import SectionContainer from "../../components/SectionContainer";
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
            case "job-score":
                name = "jobScore";
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
        <SectionContainer>
            <div className="flex-col tracker">
                <div className="mt-10 sm:mt-0">
                    <ContentContainer>
                        <div className="flex">
                            <div className="about">
                        
                            </div>
                            <div className="form-container flex">
                                <form action="#" className="form shadow" onSubmit={handleSubmit}>
                                    <div className="content">
                                        <h1>Track.</h1>
                                        <div className="form-content">
                                            <div className="input-container">
                                                <TextInput
                                                    onChange={handleChange}
                                                    name="job-title"
                                                    labelTitle="Job title"
                                                />
                                            </div>
                                            <div className="input-container">
                                                <TextInput
                                                    onChange={handleChange}
                                                    name="company-name"
                                                    labelTitle="Company name"
                                                />
                                            </div>
                                            <div className="input-container">
                                                <TextInput
                                                    onChange={handleChange}
                                                    name="location"
                                                    labelTitle="Location"
                                                />
                                            </div>
                                            <div className="input-container">
                                                <TextInput
                                                    onChange={handleChange}
                                                    name="job-score"
                                                    labelTitle="JobScan score"
                                                />
                                            </div>
                                            <div className="dropdown-container">
                                                <Dropdown onChange={handleChange} />
                                            </div>
                                            <div className="textArea-container">
                                                <TextArea onChange={handleChange} name="job-description" labelText="Job description" />
                                            </div>
                                            <div className="checkbox-container">
                                                <Checkbox onChange={handleCheckboxChange} classes="ml-3" />
                                            </div>
                                            <div className="btn-container">
                                                <Button text="Save" classes="primary drop-shadow-md" type="submit" />
                                            </div>
                                        </div>
                                        {inputError && (
                                            <p className="text-red-700 mt-2">{inputError}</p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </ContentContainer>
                </div>
            </div>
        </SectionContainer>
    );
};

export default TrackerFormPage;

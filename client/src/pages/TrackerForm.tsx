import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import { ADD_APP } from "../utils/mutations";
import Auth from '../utils/auth';

const TrackerForm = () => {
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
  if(!loggedIn) {
    window.location.assign('/')
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
    if (!value.length) {
      setInputError(`${inputName} is required!`);
      return;
    }
    if (name === "jobScore") {
      const scoreNum = parseInt(value, 10);
      setFormState({ ...formState, [name]: scoreNum });
      return;
    }

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="flex-col p-6 mx-auto">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Job Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use as much info as possible. All fields are required.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="job-title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="job-title"
                        id="job-title"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onBlur={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onBlur={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onBlur={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="stage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Stage
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onBlur={handleChange}
                      >
                        <option value="preparing">Preparing</option>
                        <option value="applied">Applied</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="job-description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Description
                      </label>
                      <textarea
                        name="job-description"
                        rows={5}
                        id="job-description"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onBlur={handleChange}
                      />
                    </div>

                    <div className="col-span-6 inline-flex align-items">
                      <label
                        htmlFor="quick-apply"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quick Apply?
                      </label>
                      <input
                        type="checkbox"
                        name="quick-apply"
                        id="quick-apply"
                        className="my-auto mx-2"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="job-score"
                        className="block text-sm font-medium text-gray-700"
                      >
                        JobScan Score
                      </label>
                      <input
                        type="text"
                        name="job-score"
                        id="job-score"
                        className="mt-1 ml-2 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onBlur={handleChange}
                      />
                    </div>
                  </div>
                  {inputError && (
                    <p className="text-red-700 mt-2">{inputError}</p>
                  )}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerForm;

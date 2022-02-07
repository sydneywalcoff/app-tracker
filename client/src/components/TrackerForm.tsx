import React from 'react';

const TrackerForm = () => {
    return (
        <div className="flex-col p-6 mx-auto">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Job Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title</label>
                                            <input type="text" name="job-title" id="job-title" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
                                            <input type="text" name="company-name" id="company-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                            <input type="text" name="location" id="location" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="stage" className="block text-sm font-medium text-gray-700">Stage</label>
                                            <select id="stage" name="stage" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>Preparing</option>
                                                <option>Applied</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">Job Description</label>
                                            <textarea name="job-description" id="job-description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="quick-apply" className="block text-sm font-medium text-gray-700">Quick Apply?</label>
                                            <div className='inline-flex'>
                                                <label htmlFor="quick-apply-yes" className="block text-sm font-medium text-gray-600 mr-2">Yes</label>
                                                <input type="radio" name="quick-apply-yes" id="quick-apply-yes" className="mt-1 focus:ring-indigo-500" />

                                                <label htmlFor="quick-apply-no" className="block text-sm font-medium text-gray-600 mx-2">No</label>
                                                <input type="radio" name="quick-apply-no" id="quick-apply-no" className="mt-1 focus:ring-indigo-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
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
import { gql } from '@apollo/client';

export const ADD_APP = gql`
    mutation addApp($jobTitle: String!, $companyName: String!, $jobDescription: String!, $status: String!, $workStyle: String!, $officeLocation: String!, $jobScore: Int, $link: String) {
        addApp(jobTitle: $jobTitle, companyName: $companyName, workStyle: $workStyle, officeLocation: $officeLocation, jobDescription: $jobDescription, status: $status, jobScore: $jobScore, link: $link) {
            _id
            jobTitle
            jobDescription
            status
            location
            locationObj {
                workStyle
                officeLocation
            }
            jobScore
            dateApplied
            lastUpdated
            link
            notes {
                _id
                noteText
                dateAdded
            }
        }
    }
`;

export const EDIT_APP = gql`
    mutation editApp($id: ID!, $jobTitle: String!, $jobDescription: String!, $companyName: String!, $status: String, $location: String!, $jobScore: Int, $link: String) {
        editApp(_id: $id, jobTitle: $jobTitle, jobDescription: $jobDescription, status: $status, location: $location, companyName:$companyName, jobScore: $jobScore, link: $link ) {
            _id
            jobTitle
            jobDescription
            status
            statusHistory {
                dateChanged
                status
            }
            location
            locationObj {
                workStyle
                officeLocation
            }
            jobScore
            dateApplied
            companyName
            lastUpdated
            link
            notes {
                _id
                noteText
                dateAdded
            }
        }
    }
`;

export const EDIT_APP_STATUS = gql`
    mutation Mutation($id: ID!, $status: String!) {
        editAppStatus(_id: $id, status: $status) {
            _id
            jobTitle
            status
            statusHistory {
                dateChanged
                status
            }
            location
            locationObj {
                workStyle
                officeLocation
            }
            dateApplied
            companyName
            lastUpdated
        }
    }
`;

export const DELETE_APP = gql`
    mutation Mutation($id: ID!) {
        deleteApp(_id: $id) {
            _id
            jobTitle
            jobDescription
            location
            locationObj {
                workStyle
                officeLocation
            }
            status
            jobScore
            dateApplied
            link
            notes {
                _id
                noteText
                dateAdded
            }
        }
    }
`;

export const ADD_NOTE = gql`
    mutation Mutation($noteText: String!, $appId: ID!) {
        addNote(noteText: $noteText, appId: $appId) {
            _id
            jobTitle
            jobDescription
            location
            locationObj {
                workStyle
                officeLocation
            }
            status
            jobScore
            dateApplied
            notes {
                _id
                noteText
                dateAdded
            }
        }
    }
`;

export const DELETE_NOTE = gql`
    mutation ($noteId: ID!, $appId: ID!) {
        deleteNote(noteId: $noteId, appId: $appId) {
            _id
            jobTitle
            jobDescription
            location
            locationObj {
                workStyle
                officeLocation
            }
            status
            jobScore
            dateApplied
            notes {
                _id
                noteText
            }
        }
    }
`;

export const LOGIN = gql`
    mutation ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation ($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
            }
        }
    }
`;
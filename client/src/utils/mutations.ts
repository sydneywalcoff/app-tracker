import { gql } from '@apollo/client';

export const ADD_APP = gql`
    mutation addApp($jobTitle: String!, $companyName: String!, $jobDescription: String!, $status: String!, $location: String!, $quickApply: Boolean!, $jobScore: Int) {
        addApp(jobTitle: $jobTitle, companyName: $companyName, jobDescription: $jobDescription, status: $status, location: $location, quickApply: $quickApply, jobScore: $jobScore) {
            _id
            jobTitle
            jobDescription
            status
            location
            quickApply
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

export const EDIT_APP = gql`
    mutation editApp($id: ID!, $jobTitle: String!, $jobDescription: String!, $companyName: String!, $status: String!, $location: String!, $quickApply: Boolean!, $jobScore: Int) {
        editApp(_id: $id, jobTitle: $jobTitle, jobDescription: $jobDescription, status: $status, location: $location, quickApply: $quickApply, companyName:$companyName, jobScore: $jobScore ) {
            _id
            jobTitle
            jobDescription
            status
            location
            quickApply
            jobScore,
            dateApplied
            companyName
            notes {
                _id
                noteText
                dateAdded
            }
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
            status
            quickApply
            jobScore,
            dateApplied
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
            status
            quickApply
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
            status
            quickApply
            jobScore
            dateApplied
            notes {
                _id
                noteText
            }
        }
    }
`;
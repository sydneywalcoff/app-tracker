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
        }
    }
`;

export const EDIT_APP = gql`
    mutation editApp($id: ID!, $jobTitle: String!, $jobDescription: String!, $companyName: String!, $status: String!, $location: String!, $quickApply: Boolean!) {
        editApp(_id: $id, jobTitle: $jobTitle, jobDescription: $jobDescription, status: $status, location: $location, quickApply: $quickApply, companyName:$companyName) {
            _id
            jobTitle
            jobDescription
            status
            location
            quickApply
            jobScore
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
            jobScore
        }
    }
`;
import { gql } from '@apollo/client';

export const QUERY_APPS = gql`
    query {
        Apps {
            jobTitle
            _id
            jobDescription
            status
            location
            quickApply
            jobScore
        }
    }
`;

export const QUERY_SINGLE_APP = gql`
    query App ($id: ID!) {
        App(_id: $id) {
            jobTitle
            _id
            jobDescription
            status
            location
            quickApply
            jobScore
        }
    }
`;
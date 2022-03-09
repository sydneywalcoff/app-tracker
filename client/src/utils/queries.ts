import { gql } from '@apollo/client';

export const QUERY_APPS = gql`
    query App {
        apps {
            _id
            jobTitle
            jobDescription
            status
            location
            quickApply
            jobScore
            dateApplied
            companyName
            lastUpdated
            notes {
                noteText
                _id
                dateAdded
            }
        }
    }
`;

export const QUERY_SINGLE_APP = gql`
    query app ($id: ID!) {
        app(_id: $id) {
            jobTitle
            _id
            jobDescription
            status
            location
            quickApply
            jobScore
            dateApplied
            companyName
            lastUpdated
            notes {
                noteText
                _id
                dateAdded
            }
        }
    }
`;
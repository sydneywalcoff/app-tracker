import { gql } from '@apollo/client';

export const QUERY_APPS = gql`
    query App {
        apps {
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
            quickApply
            jobScore
            dateApplied
            companyName
            lastUpdated
            link
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
            statusHistory {
                dateChanged
                status
            }
            location
            locationObj {
                workStyle
                officeLocation
            }
            quickApply
            jobScore
            dateApplied
            companyName
            lastUpdated
            link
            notes {
                noteText
                _id
                dateAdded
            }
        }
    }
`;

export const QUERY_MY_APPS = gql`
    query myApps {
        myApps {
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
            quickApply
            jobScore
            dateApplied
            companyName
            lastUpdated
            link
            notes {
                noteText
                _id
                dateAdded
            }
        }
    }
`;
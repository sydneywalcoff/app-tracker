import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type App {
        _id: ID!
        jobTitle: String!
        jobDescription: String!
        companyName: String!
        status: String!
        location: String!
        quickApply: Boolean!
        jobScore: Int
        dateApplied: String
        notes: [Note]
    }

    type Note {
        _id: ID!
        noteText: String!
        dateAdded: String!
    }

    type Query {
        apps: [App]
        app(_id: ID!): App
    }

    type Mutation {
        addApp(jobTitle: String!, companyName: String!, jobDescription: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int): App
        editApp(_id: ID!, jobTitle: String!, jobDescription: String!, companyName: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int) : App
        deleteApp(_id: ID!) : App
    }
`;

export default typeDefs;
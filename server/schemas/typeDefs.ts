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
        lastUpdated: String
        notes: [Note],
        questions: [Question]
    }

    type Note {
        _id: ID!
        noteText: String!
        dateAdded: String!
    }

    type Question {
        _id: ID!
        questionText: String!
        answerText: String
    }

    type Query {
        apps: [App]
        app(_id: ID!): App
    }

    type Mutation {
        addApp(jobTitle: String!, companyName: String!, jobDescription: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int): App
        editApp(_id: ID!, jobTitle: String!, jobDescription: String!, companyName: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int, lastUpdated: String) : App
        deleteApp(_id: ID!) : App
        addNote(appId: ID!, noteText: String!) : App
        deleteNote(appId: ID!, noteId: ID! ): App
        addQuestion(appId: ID!, questionText: String!) : App
    }
`;

export default typeDefs;
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
        notes: [Note]
    }

    type Note {
        _id: ID!
        noteText: String!
        dateAdded: String!
    }

    type User {
        _id:ID!
        username: String!
        password: String!
        email: String!
        apps: [App]
    }

    type Query {
        apps: [App]
        app(_id: ID!): App
        users: [User]
        me: User
    }

    type Auth {
        token: String
        user: User
    }

    type Mutation {
        addApp(jobTitle: String!, companyName: String!, jobDescription: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int): App
        editApp(_id: ID!, jobTitle: String!, jobDescription: String!, companyName: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int, lastUpdated: String) : App
        deleteApp(_id: ID!) : App
        addNote(appId: ID!, noteText: String!) : App
        deleteNote(appId: ID!, noteId: ID! ): App
        addUser(username: String!, password: String!, email: String!): Auth
        login(username: String!, password: String!): Auth
    }
`;

export default typeDefs;
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type App {
        _id: ID!
        jobTitle: String!
        jobDescription: String!
        status: String!
        location: String!
        quickApply: Boolean!
        jobScore: Int
    }

    type Query {
        Apps: [App]
        App(_id: ID!): App
    }

    type Mutation {
        addApp(jobTitle: String!, jobDescription: String!, status: String!, location: String!, quickApply: Boolean!, jobScore: Int): App
    }
`;

export default typeDefs;
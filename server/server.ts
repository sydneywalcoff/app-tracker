import { ApolloServer } from 'apollo-server-express';
import express from 'express';

const app = express();
const db = require('./config/connection');

const PORT: string | number = process.env.PORT || 3001;
import { typeDefs, resolvers } from './schemas'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const startServer = async () => {
    await server.start();
    
    server.applyMiddleware({ app })
};
startServer();

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`listening at localhost:${PORT}`);
        console.log(`Use graphql at localhost:${PORT}${server.graphqlPath}`)
    })
});
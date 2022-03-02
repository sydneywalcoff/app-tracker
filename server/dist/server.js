"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { ApolloServer } = require('apollo-server-express');
const { express } = require('express');
const { path } = require('path');
const app = express();
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({ app });
});
startServer();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
;
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`listening at localhost:${PORT}`);
        console.log(`Use graphql at localhost:${PORT}${server.graphqlPath}`);
    });
});

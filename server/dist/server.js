'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const resolvers_1 = require("./model/graphql/resolvers/resolvers");
const morgan = require('morgan');
const app = (0, express_1.default)();
app.use(morgan('tiny'));
const port = 4000;
async function startApolloServer() {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: resolvers_1.typeDefs, resolvers: resolvers_1.resolvers });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}
startApolloServer();
//# sourceMappingURL=server.js.map
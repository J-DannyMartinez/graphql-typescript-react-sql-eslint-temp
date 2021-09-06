'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const user_1 = require("./model/graphql/resolvers/user");
const PORT = process.env.PORT || 4000;
const main = async () => {
    try {
        const app = (0, express_1.default)();
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema: await (0, type_graphql_1.buildSchema)({
                resolvers: [user_1.UserResolver]
            })
        });
        apolloServer.applyMiddleware({ app });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }
    catch (err) {
        console.error(err);
    }
};
main().catch(err => console.log(err));
//# sourceMappingURL=server.js.map
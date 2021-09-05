'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./model/graphql/schemas/typeDefs");
const resolvers_1 = require("./model/graphql/resolvers/resolvers");
const client_1 = require("@prisma/client");
const morgan = require('morgan');
const app = (0, express_1.default)();
app.use(morgan('tiny'));
const port = 4000;
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_express_1.ApolloServer({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
        yield server.start();
        server.applyMiddleware({ app });
        yield new Promise(resolve => app.listen({ port }, resolve));
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
        return { server, app };
    });
}
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.users.create({
            data: {
                first_name: 'Alice',
                last_name: 'johnson',
                email: 'alice@prisma.io',
                password: '123456'
            },
        });
        const allUsers = yield prisma.users.findMany();
        console.log(allUsers);
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
startApolloServer();
//# sourceMappingURL=server.js.map
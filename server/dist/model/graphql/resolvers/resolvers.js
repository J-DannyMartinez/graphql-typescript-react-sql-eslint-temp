"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const client_1 = require("@prisma/client");
const apollo_server_express_1 = require("apollo-server-express");
require("reflect-metadata");
const users = {
    firstName: 'janae',
    lastName: 'sam',
    email: 'jackiecom',
    pass: '123456'
};
exports.typeDefs = (0, apollo_server_express_1.gql) `



class User {
  firstName: string;
  lastName: string;
  email: string;
  pass: string;
}

	type Query {
		users: User
	}
`;
exports.resolvers = {
    Query: {
        users: () => users
    }
};
const prisma = new client_1.PrismaClient();
async function main() {
    const allUsers = await prisma.users.findMany();
    console.log(allUsers);
}
main()
    .catch(e => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=resolvers.js.map
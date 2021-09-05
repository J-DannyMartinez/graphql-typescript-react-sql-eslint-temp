"use strict";
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `

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
module.exports = { typeDefs };
//# sourceMappingURL=typeDefs.js.map
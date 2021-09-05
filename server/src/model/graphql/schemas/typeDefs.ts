import { gql } from 'apollo-server-express';

const typeDefs = gql`

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

export = { typeDefs };

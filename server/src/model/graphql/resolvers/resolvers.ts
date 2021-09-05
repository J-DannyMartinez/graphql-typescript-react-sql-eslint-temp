import { PrismaClient } from '@prisma/client';
import { gql } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema, Resolver, Query } from 'type-graphql';

const users = {
	firstName: 'janae',
	lastName: 'sam',
	email: 'jackiecom',
	pass: '123456'
};
export const typeDefs = gql`



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

//resolvers
export const resolvers = {
	Query: {
		users: () => users
	}
};
//add the data into the resolvers

const prisma = new PrismaClient();

async function main() {
	// await prisma.users.create({

	// 	data: {

	// 	  first_name: 'Alice',
	// 	  last_name: 'johnson',

	// 	  email: 'alice@prisma.io',

	// 	 password: '123456'

	// 	},

	//   })

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

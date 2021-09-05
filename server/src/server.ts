'use strict';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './model/graphql/schemas/typeDefs';
import { resolvers } from './model/graphql/resolvers/resolvers';
import { PrismaClient } from '@prisma/client'
const morgan = require('morgan');

const app: any = express();
app.use(morgan('tiny'));

const port: number = 4000;

async function startApolloServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	server.applyMiddleware({ app });

	// eslint-disable-next-line prettier/prettier
	await new Promise(resolve => app.listen({ port }, resolve));
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	return { server, app };
}

const prisma = new PrismaClient()


async function main() {

	

	await prisma.users.create({

		data: {
	
		  first_name: 'Alice',
		  last_name: 'johnson',
	
		  email: 'alice@prisma.io',
	
		 password: '123456'
	
		},
	
	  })

	  const allUsers = await prisma.users.findMany()

	console.log(allUsers)

}


main()

  .catch((e) => {

    throw e

  })

  .finally(async () => {

    await prisma.$disconnect()

  })

startApolloServer();

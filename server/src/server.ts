'use strict';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import { typeDefs } from './model/graphql/schemas/typeDefs';
import { typeDefs, resolvers } from './model/graphql/resolvers/resolvers';
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

startApolloServer();

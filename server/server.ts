'use strict';

import express from 'express';
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./model/schema/graphql');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

async function startApolloServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	server.applyMiddleware({ app });

	// eslint-disable-next-line prettier/prettier
	await new Promise(resolve => app.listen({ port: 4000 }, resolve));
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	return { server, app };
}

startApolloServer();

console.log('yos');

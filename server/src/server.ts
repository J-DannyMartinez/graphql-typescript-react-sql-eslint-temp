'use strict';

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './model/graphql/resolvers/user';

const PORT = process.env.PORT || 4000;

const main = async () => {
	try {
		const app = express();

		// Create the GraphQL server
		const apolloServer = new ApolloServer({
			schema: await buildSchema({
				resolvers: [UserResolver]
			})
		});

		apolloServer.applyMiddleware({ app });

		// Start the server
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

main().catch(err => console.log(err));

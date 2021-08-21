const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./model/schema/graphql");
const Bundler = require("parcel-bundler");

const app = express();

const file = "./server.js"; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();

console.log("hey");
app.use(bundler.middleware());
//node server.js

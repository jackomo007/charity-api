import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../graphql/resolvers";
import { typeDefs } from "../graphql/schema";

const PORT = process.env.PORT || 4000;

const app = express();
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀 GraphQL API running at http://localhost:${PORT}/graphql`);
  });
}

startServer();

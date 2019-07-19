const express = require('express');
const cors = require('cors');
const { resolvers, typeDefs } = require('./schema/index');
const { ApolloServer } = require('apollo-server-express');

const app = express();

app.use(cors());

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';
    
    return {token};
  }
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
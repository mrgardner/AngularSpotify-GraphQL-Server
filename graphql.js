const { ApolloServer } = require('apollo-server-lambda');
const { resolvers, typeDefs } = require('./schema/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => {
    console.log('event ', event);
    console.log('context ', context);
    return {
      token: event.headers.Authorization || '',
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }
  }
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
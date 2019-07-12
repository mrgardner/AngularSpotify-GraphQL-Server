// resolvers.js

const { GraphQLScalarType } = require("graphql");
const fetch = require('node-fetch');

// Define Date scalar type.

const GQDate = new GraphQLScalarType({
  name: "GQDate",
  description: "Date type",
  parseValue(value) {
    // value comes from the client
    return value; // sent to resolvers
  },
  serialize(value) {
    // value comes from resolvers
    return value; // sent to the client
  },
  parseLiteral(ast) {
    // value comes from the client
    return new Date(ast.value); // sent to resolvers
  }
});

const resolvers = {
  Query: {
    User: (root, args, context) =>  {
        const token = `Bearer ${context.headers.authorization}`;
        return fetch('https://api.spotify.com/v1/me', {
            method: 'get',
            headers: {'Content-Type': 'application/json', Authorization: token}
        }).then(res => res.json())
    }
  },
  GQDate
};

module.exports.Resolvers = resolvers;
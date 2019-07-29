const _ = require('lodash');
const { UserTypes, UserResolvers } = require('./user');
const { PlaylistTypes, PlaylistResolvers } = require('./playlist');
const { gql } = require('apollo-server-lambda');

const Query = gql`
  type Query {
    hello: String
  }
`;

const Resolver = {
  Query: {
    hello: () =>  {
      return "Hello World";
    }
  }
};

exports.typeDefs = [
  Query,
  UserTypes,
  PlaylistTypes
];

exports.resolvers = _.merge(
  Resolver,
  UserResolvers,
  PlaylistResolvers
);

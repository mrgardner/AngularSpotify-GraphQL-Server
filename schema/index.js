const _ = require('lodash');
const { UserTypes, UserResolvers } = require('./user');
const { PlaylistTypes, PlaylistResolvers } = require('./playlist');
const { gql } = require('apollo-server-lambda');

const Query = gql`
  # declare custom scalars for date as GQDate
  scalar GQDate

  type Query {
    # Get User from Spotify
    hello: String
  }
`;

exports.typeDefs = [
  Query,
  UserTypes,
  PlaylistTypes
];

exports.resolvers = _.merge(
  UserResolvers,
  PlaylistResolvers
);

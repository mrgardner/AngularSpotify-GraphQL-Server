const _ = require('lodash');
const { UserTypes, UserResolvers } = require('./user');
const { PlaylistTypes, PlaylistResolvers } = require('./playlist');
const { AlbumTypes, AlbumResolvers } = require('./albums');
const { ArtistTypes, ArtistResolvers } = require('./artists');
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
  PlaylistTypes,
  AlbumTypes,
  ArtistTypes
];

exports.resolvers = _.merge(
  Resolver,
  UserResolvers,
  PlaylistResolvers,
  AlbumResolvers,
  ArtistResolvers
);

const { callApi } = require('../utils/callApi');
const { gql } = require('apollo-server-lambda');

exports.ArtistTypes = gql`
  extend type Query {
    followedArtists(url: String!): followedArtistResponse,
  }

  type followedArtistResponse {
    artists: ArtistResponse
  }

  type ArtistResponse {
    items: [followedArtist]
  }

  type followedArtist {
    external_urls: ExternalUrls,
    followers: Followers,
    genres: [String],
    href: String,
    id: String,
    images: [Image],
    name: String,
    popularity: Int,
    type: String,
    uri: String
  }
`;

exports.ArtistResolvers = {
  Query: {
    followedArtists: (source, args, context) =>  {
      return callApi(args.url, 'GET', context.token);
    }
  }
};
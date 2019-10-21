const { callApi } = require('../utils/callApi');
const { gql } = require('apollo-server-lambda');

exports.AlbumTypes = gql`
  extend type Query {
    albums(url: String!): AlbumResponse,
  }

  type AlbumResponse {
    href: String
    items: [Albums]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

 type Albums {
  added_at: String
  album: Album
 }

  type Copyrights {
    text: String
    type: String
  }
`;

exports.AlbumResolvers = {
  Query: {
    albums: (source, args, context) =>  {
      return callApi(args.url, 'GET', context.token);
    }
  }
};
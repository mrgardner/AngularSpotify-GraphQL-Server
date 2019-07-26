const { callApi } = require('../utils/callApi');
const { gql } = require('apollo-server-lambda');

exports.UserTypes = gql`
  extend type Query {
    user(url: String!): User
  }

  type ExplicitContent {
    filter_enabled: Boolean
    filter_locked: Boolean
  }
  
  type Followers {
    href: String
    total: Int
  }

  type User {
    birthdate: String
    country: String
    display_name: String
    email: String
    explicit_content: ExplicitContent
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: String
    product: String
    type: String
    uri: String
  }
`;

exports.UserResolvers = {
  Query: {
    user: (source, args, context) =>  {
      return callApi(args.url, 'GET', context.token);
    }
  }
};
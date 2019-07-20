const fetch = require('node-fetch');
const { gql } = require('apollo-server-lambda');

exports.UserTypes = gql`
  extend type Query {
    user: User
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
    user: (root, args, context) =>  {
      const token = `${context.token}`;
      return fetch('https://api.spotify.com/v1/me', {
        method: 'get',
        headers: {'Content-Type': 'application/json', Authorization: token}
      }).then(res => res.json())
    }
  }
};
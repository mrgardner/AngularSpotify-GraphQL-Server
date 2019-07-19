const fetch = require('node-fetch');
const { gql } = require('apollo-server-lambda');

exports.PlaylistTypes = gql`
  extend type Query {
    playlists(url: String!): PlaylistResponse
  }

  type PlaylistResponse {
    href: String
    items: [Playlist]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type ExternalUrls {
    spotify: String
  }

  type Image {
    height: Int
    url: String
    width: Int
  }

  type Owner {
    display_name: String
    external_urls: ExternalUrls
    href: String
    id: String
    type: String
    uri: String
  }

  type Tracks {
    href: String
    total: Int
  }

  type Playlist {
    collaborative: Boolean
    external_urls: ExternalUrls
    href: String
    id: String
    images: [Image]
    name: String
    owner: Owner
    primary_color: String
    public: Boolean
    snapshot_id: String
    tracks: Tracks
    type: String
    uri: String
  }
`;

exports.PlaylistResolvers = {
  Query: {
    playlists: (root, args, context) =>  {
        const token = `${context.token}`;
        return fetch(args.url, {
            method: 'get',
            headers: {'Content-Type': 'application/json', Authorization: token}
        }).then(res => res.json());
    }
  }
};
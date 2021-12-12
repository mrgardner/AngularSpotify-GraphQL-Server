const { callApi } = require('../utils/callApi');
const { gql } = require('apollo-server-lambda');

exports.PlaylistTypes = gql`
  extend type Query {
    playlists(url: String!): PlaylistResponse,
    playlist(url: String!): Playlist,
    playlistTracks(url: String!): TrackResponse
  }

  type TrackResponse {
    href: String
    items: [TrackInfo]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type TrackInfo {
    added_at: String
    added_by: AddedBy
    is_local: Boolean
    track: Track
    video_thumbnail: VideoThumbNail
  }

  type AddedBy {
    external_urls: ExternalUrls
    href: String
    id: String
    type: String
    uri: String
  }
  
  type Track {
    album: Album
    artists: [Artist]
    available_markets: [String]
    disc_number: Int
    duration_ms: Int
    episode: Boolean
    explicit: Boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls
    href: String
    id: String
    is_local: Boolean
    name: String
    popularity: Int
    preview_url: String
    track: Boolean
    track_number: Int
    type: String
    uri: String
  }

  type Album {
    album_type: String
    artists: [Artist]
    available_markets: [String]
    external_urls: ExternalUrls
    href: String
    id: String
    images: [Image]
    name: String
    release_date: String
    release_date_precision: String
    total_tracks: Int
    type: String
    uri: String
  }

  type Artist {
    external_urls: ExternalUrls
    href: String
    id: String
    name: String
    type: String
    uri: String
  }

  type ExternalIds {
    isrc: String
  }

  type VideoThumbNail {
    url: String
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
    items: [Track]
    limit: Int
    next: String
    offset: Int
    previous: String
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
    followers: Followers
  }
`;

exports.PlaylistResolvers = {
  Query: {
    playlists: (source, args, context) =>  {
      return callApi(args.url, 'GET', context.token);
    },
    playlist: (source, args, context) =>  {
      return callApi(args.url, 'GET', context.token);
    },
    playlistTracks: (source, args, context) => {
      return callApi(args.url, 'GET', context.token);
    }
  }
};
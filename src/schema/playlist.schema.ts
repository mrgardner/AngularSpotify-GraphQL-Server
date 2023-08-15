export const playlistTypes = `#graphql
  scalar Object

  type Query {
    playlists(offset: Int!): PlaylistResponse,
    playlist(playlistID: String!): Playlist,
    playlistTracks(offset: Int, playlistID: String!, limit: Int): TrackResponse
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

  type PlaylistResponse {
    href: String
    items: [Playlist]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

    type Playlist {
    collaborative: Boolean
    description: String
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: String
    images: [Image]
    name: String
    owner: Owner
    public: Boolean
    snapshot_id: String
    tracks: Tracks
    type: String
    uri: String
  }

  type Tracks {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [TrackItems]
  }

  type TrackItems {
    added_at: String
    added_by: AddedBy
    is_local: Boolean
    track: Track
  }

  type Track {
    album: Album
    artists: [Artist]
    available_markets: [String]
    disc_Int: Int
    duration_ms: Int
    explicit: Boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls
    href: String
    id: String
    is_playable: Boolean
    linked_from: Object
    restrictions: Restrictions
    name: String
    popularity: Int
    preview_url: String
    track_number: Int
    type: String
    uri: String
    is_local: Boolean
  }

  type Album {
    album_type: String
    total_tracks: Int
    available_markets: [String]
    external_urls: ExternalUrls
    href: String
    id: String
    images: [Image]
    name: String
    release_date: String
    release_date_precision: String
    restrictions: Restrictions
    type: String
    uri: String
    copyrights: [Copyright]
    external_ids: ExternalIds
    genres: [String]
    label: String
    popularity: Int
    album_group: String
    artists: [AlbumArtist]
  }

  type AlbumArtist {
    external_urls: ExternalUrls
    href: String
    id: String
    name: String
    type: String
    uri: String
  }

  type Artist {
    external_urls: ExternalUrls
    followers: Followers
    genres: [String]
    href: String
    id: String
    images: [Image]
    name: String
    popularity: Int
    type: String
    uri: String
  }

  type Owner {
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: String
    type: String
    uri: String
    display_name: String
  }

  type AddedBy {
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: String
    type: String
    uri: String
  }
  type Image {
    height: Int
    url: String
    width: Int
  }

  type Copyright {
    text: String
    type: String
  }

  type ExternalUrls {
    spotify: String
  }

  type Restrictions {
    reason: String
  }

  type ExternalIds {
    isrc: String
    ean: String
    upc: String
  }

  type VideoThumbNail {
    url: String
  }
`
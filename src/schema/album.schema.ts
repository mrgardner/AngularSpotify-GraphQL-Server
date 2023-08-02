export const albumTypes = `#graphql
  type Query {
    albums(morePlaylists: String): AlbumResponse,
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
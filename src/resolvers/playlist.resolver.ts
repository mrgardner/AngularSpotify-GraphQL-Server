export const playlistResolvers = {
  Query: {
    playlist: async (_, { playlistID }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylist(playlistID);
    },
    playlists: async (_, { offset }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylists(offset);
    },
    playlistTracks: async (_, { trackOffset, playlistID, limit }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylistTracks(trackOffset, playlistID, limit);
    }
  },
};
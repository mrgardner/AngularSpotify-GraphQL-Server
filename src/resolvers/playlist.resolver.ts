export const playlistResolvers = {
  Query: {
    playlist: async (_, { playlistID }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylist(playlistID);
    },
    playlists: async (_, { morePlaylists }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylists(morePlaylists);
    },
    playlistTracks: async (_, { trackOffset, playlistID, limit }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylistTracks(trackOffset, playlistID, limit);
    }
  },
};
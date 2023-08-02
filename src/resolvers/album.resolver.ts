export const albumResolvers = {
  Query: {
    albums: async (_, { moreAlbums }, { dataSources }) => {
      return dataSources.spotifyApi.getAlbums(moreAlbums);
    }
  },
};
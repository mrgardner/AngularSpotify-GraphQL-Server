export const albumResolvers = {
  Query: {
    albums: async (_, { offset }, { dataSources }) => {
      return dataSources.spotifyApi.getAlbums(offset);
    }
  },
};
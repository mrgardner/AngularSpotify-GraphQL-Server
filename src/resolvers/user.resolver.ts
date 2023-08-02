export const userResolvers = {
  Query: {
    user: async (_, __, { dataSources }) => {
      return dataSources.spotifyApi.getUser();
    }
  },
};
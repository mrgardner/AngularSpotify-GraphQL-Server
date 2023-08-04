import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { SpotifyAPI } from './api/spotify.api.js';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './schema/index.js';

interface SpotifyContext {
  token?: String;
  dataSources: {
    spotifyApi: SpotifyAPI;
  };
}

const server = new ApolloServer<SpotifyContext>({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const { cache } = server;
    const token = req.headers.authorization;
    return {
      dataSources: {
        spotifyApi: new SpotifyAPI({ cache, token }),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
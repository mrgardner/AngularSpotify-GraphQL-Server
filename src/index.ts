import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { SpotifyAPI } from './api/spotify.api.js';
import _ from 'lodash';
import { userResolvers } from './resolvers/user.resolver.js';
import { userTypes } from './schema/user.schema.js';
import { albumResolvers } from './resolvers/album.resolver.js';
import { playlistResolvers } from './resolvers/playlist.resolver.js';
import { albumTypes } from './schema/album.schema.js';
import { playlistTypes } from './schema/playlist.schema.js';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   type ExplicitContent {
//     filter_enabled: Boolean
//     filter_locked: Boolean
//   }

//   type Followers {
//     href: String
//     total: Int
//   }

//   type ExternalUrls {
//     spotify: String
//   }

//   type User {
//     birthdate: String
//     country: String
//     display_name: String
//     email: String
//     explicit_content: ExplicitContent
//     external_urls: ExternalUrls
//     followers: Followers
//     href: String
//     id: String
//     product: String
//     type: String
//     uri: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book],
//     user: User
//   }
// `;

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];



// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query: {
//     books: () => books,
//     user: async (_, __, { dataSources }) => {
//       return dataSources.spotifyApi.getUser();
//     }
//   },
// };

interface SpotifyContext {
  token?: String;
  dataSources: {
    spotifyApi: SpotifyAPI;
  };
}

const typeDefs = [
  userTypes,
  playlistTypes,
  albumTypes
];

const resolvers = _.merge(
  userResolvers,
  playlistResolvers,
  albumResolvers
);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<SpotifyContext>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const { cache } = server;
    const token = req.headers.authorization;
    return {
      // token: token
      // token: ,
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        spotifyApi: new SpotifyAPI({ cache, token }),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
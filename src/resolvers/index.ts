import { userResolvers } from './user.resolver.js';
import { albumResolvers } from './album.resolver.js';
import { playlistResolvers } from './playlist.resolver.js';

export const resolvers = [
  userResolvers,
  playlistResolvers,
  albumResolvers
];
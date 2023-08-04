import { albumTypes } from './album.schema.js';
import { playlistTypes } from './playlist.schema.js';
import { userTypes } from './user.schema.js';

export const typeDefs = [
  userTypes,
  playlistTypes,
  albumTypes
];
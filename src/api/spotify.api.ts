import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import { ValueOrPromise } from '@apollo/datasource-rest/dist/RESTDataSource';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { AlbumResponse } from '../interfaces/albums.interface';
import { Playlist, PlaylistResponse, TrackResponse } from '../interfaces/playlist.interface';
import { User } from '../interfaces/user.interface';

export class SpotifyAPI extends RESTDataSource {
  override baseURL = 'https://api.spotify.com/v1/';
  private token: string;

  constructor(options: { cache: KeyValueCache<string>; token: string }) {
    super(options);
    this.token = options.token;
  }

  protected override willSendRequest(path: string, requestOpts: AugmentedRequest): ValueOrPromise<void> {
    requestOpts.headers.Authorization = this.token;
  }

  async getUser(): Promise<User> {
    return this.get(`me`);
  }

  async getPlaylist(playlistID: string): Promise<Playlist> {
    return this.get(`playlists/${playlistID}`);
  }

  async getPlaylists(offset: number): Promise<PlaylistResponse> {
    const url = `me/playlists?offset=${offset.toString()}&limit=50`;
    return this.get(url);
  }

  async getPlaylistTracks(trackOffset: number, playlistID: string, limit: number): Promise<TrackResponse> {
    const url = `playlists/${playlistID}/tracks?offset=${trackOffset.toString()}&limit=${limit.toString()}`;
    return this.get(url);
  }

  async getAlbums(offset: number): Promise<AlbumResponse> {
    const url = `me/albums?offset=${offset.toString()}&limit=50`;
    return this.get(url);
  }

  // async getFollowedArtists(): Promise<any> {
  //   return this.get<any>(`me`);
  // }
}
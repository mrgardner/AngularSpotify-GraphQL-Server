import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import { ValueOrPromise } from '@apollo/datasource-rest/dist/RESTDataSource';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';

export class SpotifyAPI extends RESTDataSource {
  override baseURL = 'https://api.spotify.com/v1/';
  private token: string;

  constructor(options: { cache: KeyValueCache<string>; token: any }) {
    super(options);
    this.token = options.token;
  }

  protected override willSendRequest(path: string, requestOpts: AugmentedRequest): ValueOrPromise<void> {
    requestOpts.headers.Authorization = this.token;
  }

  async getUser(url: string): Promise<any> {
    return this.get<any>(`me`);
  }

  async getPlaylist(playlistID: string): Promise<any> {
    return this.get<any>(`playlists/${playlistID}`);
  }

  async getPlaylists(morePlaylists: string): Promise<any> {
    const url = morePlaylists ? morePlaylists : 'me/playlists?limit=50';
    return this.get<any>(url);
  }

  async getPlaylistTracks(trackOffset: number, playlistID: string, limit: number): Promise<any> {
    const url = `playlists/${playlistID}/tracks?offset=${trackOffset.toString()}&limit=${limit.toString()}`;
    return this.get<any>(url);
  }

  async getAlbums(moreAlbums: string): Promise<any> {
    const url = moreAlbums ? moreAlbums : `me/albums?limit=50`;
    return this.get<any>(url);
  }

  // async getFollowedArtists(): Promise<any> {
  //   return this.get<any>(`me`);
  // }
}
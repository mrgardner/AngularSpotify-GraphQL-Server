import { Followers } from "./user.interface";

export interface TrackResponse {
  href: string;
  items: TrackInfo[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface TrackInfo {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  track: Track;
  video_thumbnail: VideoThumbNail;
}

export interface PlaylistResponse {
  href: string;
  items: [Playlist];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Tracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: TrackItems[];
}

export interface TrackItems {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  track: Track
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: object;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
  artists: AlbumArtist[];
}

export interface AlbumArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string
}

export interface Owner {
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string
}

export interface AddedBy {
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  type: string;
  uri: string
}
export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Copyright {
  text: string;
  type: string
}

export interface ExternalUrls {
  spotify: string;
}

export interface Restrictions {
  reason: string
}

export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string
}

export interface VideoThumbNail {
  url: string;
}
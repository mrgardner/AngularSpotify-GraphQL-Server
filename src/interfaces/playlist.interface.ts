import { Followers } from "./user.interface"

export interface TrackResponse {
  href: string
  items: [TrackInfo]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface TrackInfo {
  added_at: string
  added_by: AddedBy
  is_local: boolean
  track: Track
  video_thumbnail: VideoThumbNail
}

export interface AddedBy {
  external_urls: ExternalUrls
  href: string
  id: string
  type: string
  uri: string
}

export interface Track {
  album: Album
  artists: [Artist]
  available_markets: [string]
  disc_number: number
  duration_ms: number
  episode: boolean
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track: boolean
  track_number: number
  type: string
  uri: string
}

export interface Album {
  album_type: string
  artists: [Artist]
  available_markets: [string]
  external_urls: ExternalUrls
  href: string
  id: string
  images: [Image]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalIds {
  isrc: string
}

export interface VideoThumbNail {
  url: string
}

export interface PlaylistResponse {
  href: string
  items: [Playlist]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Owner {
  display_name: string
  external_urls: ExternalUrls
  href: string
  id: string
  type: string
  uri: string
}

export interface Tracks {
  href: string
  items: [Track]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface Playlist {
  collaborative: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  images: [Image]
  name: string
  owner: Owner
  primary_color: string
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
  followers: Followers
}
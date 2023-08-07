import { Album } from "./playlist.interface"

export interface AlbumResponse {
  href: string
  items: [Albums]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface Albums {
  added_at: string
  album: Album
}

export interface Copyrights {
  text: string
  type: string
}
import { ExternalUrls } from "./playlist.interface"

export interface ExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

export interface Followers {
  href: string
  total: number
}

export interface User {
  birthdate: string
  country: string
  display_name: string
  email: string
  explicit_content: ExplicitContent
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  product: string
  type: string
  uri: string
}
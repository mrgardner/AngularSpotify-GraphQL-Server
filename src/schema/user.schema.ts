export const userTypes = `#graphql
   type Query {
    user: User
  }
  
  type ExplicitContent {
    filter_enabled: Boolean
    filter_locked: Boolean
  }
  
  type Followers {
    href: String
    total: Int
  }

  type User {
    birthdate: String
    country: String
    display_name: String
    email: String
    explicit_content: ExplicitContent
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: String
    product: String
    type: String
    uri: String
  }
`;
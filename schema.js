// schema.js

const schema = `
# declare custom scalars for date as GQDate
scalar GQDate

type ExplicitContent {
    filter_enabled: Boolean
    filter_locked: Boolean
}

type ExternalUrls {
    spotify: String
}

type Followers {
    href: String
    total: Int
}

type User {
    birthdate: GQDate
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

type Query {
    # Get User from Spotify
    User: User
}
`;

module.exports.Schema = schema;
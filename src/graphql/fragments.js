import { gql } from "@apollo/client"

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
    fullName
    ownerAvatarUrl
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`

export const REVIEW_FIELDS = gql`
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`
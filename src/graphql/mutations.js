import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS } from './fragments'

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation newReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
      id
      rating
      createdAt
      text
      repositoryId
      repository {
        ...RepositoryFields
        createdAt
        url
      }
      user {
        username
      }
    }
  }
  ${REPOSITORY_FIELDS}
`
export const SIGN_UP = gql`
  mutation signUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`
export const DELETE_REVIEW = gql`
  mutation delReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`
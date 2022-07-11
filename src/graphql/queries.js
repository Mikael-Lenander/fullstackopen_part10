import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query getRepositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $after: String, $first: Int) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, after: $after, first: $first) {
      totalCount
      edges {
        node {
          ...RepositoryFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_FIELDS}
`

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`

export const GET_REVIEWS = gql`
  query getReviews($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
        ...RepositoryFields
        url
        reviews(first: $first, after: $after) {
          totalCount
          edges {
            node {
              ...ReviewFields
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
          }
        }
    }
  }
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
`
import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = variables => {
  const { data, error, loading, fetchMore } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables
  }) 

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const reviews = data && data.repository.reviews.edges.map(edge => edge.node)
  const repository = data && data.repository

  return { reviews, repository, loading, fetchMore: handleFetchMore }
}

export default useReviews
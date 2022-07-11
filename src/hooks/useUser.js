import { GET_USER } from '../graphql/queries'
import { useQuery } from '@apollo/client'

export default function useUser(includeReviews=false) {
  const { data, loading, refetch } = useQuery(GET_USER, { 
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  })

  return { user: data?.me, loading, refetch }

}
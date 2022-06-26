import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'


const useSignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = async () => {
    console.log('signing out')
    await authStorage.removeAccessToken()
    console.log('removed access token')
    apolloClient.resetStore()
    console.log('reset store')
  }

  return signOut
}

export default useSignOut
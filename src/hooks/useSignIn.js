import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(SIGN_IN);
  const navigate = useNavigate()

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } })
    if (data) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      console.log('data.authenticate.accessToken', data.authenticate.accessToken)
      apolloClient.resetStore()
      navigate('/')
    }
  };

  return [signIn, result];
};

export default useSignIn
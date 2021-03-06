import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../graphql/mutations'
import useSignIn from './useSignIn'

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const [signIn] = useSignIn()

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } })
    if (data) {
      await signIn({ username, password })
    }
  };

  return [signUp, result];
};

export default useSignUp
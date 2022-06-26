import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'
import theme from '../theme'
import { GET_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useSignOut from '../hooks/useSignOut';
// import useAuthStorage from '../hooks/useAuthStorage';
// import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    opacity: 0.8,
    backgroundColor: 'black',
    paddingBottom: 20
  }
});

const AppBar = () => {

  const { data } = useQuery(GET_USER, { fetchPolicy: 'cache-and-network' })
  const signOut = useSignOut()
  console.log('appbar data', data);

  // const authStorage = useAuthStorage()
  // const apolloClient = useApolloClient()

  async function onSignOut() {
    console.log('executing')
    await signOut()
    // console.log('signing out')
    // await authStorage.removeAccessToken()
    // apolloClient.resetStore()
  }

  return <View style={styles.container}>
    <ScrollView style={theme.flexRow} horizontal>
      <AppBarTab text='Repositories' to='/' />
      {!(data && data.me) ? <AppBarTab text='Sign in' to='/signin' /> : <AppBarTab text='Sign out' to='/' onPress={onSignOut} />}
    </ScrollView>
  </View>;
};

export default AppBar;

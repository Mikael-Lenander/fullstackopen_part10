import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'
import theme from '../theme'
import useSignOut from '../hooks/useSignOut';
import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    opacity: 0.8,
    backgroundColor: 'black',
    paddingBottom: 20
  }
});

const AppBar = () => {

  const { user } = useUser()
  const signOut = useSignOut()

  async function onSignOut() {
    await signOut()
  }

  return <View style={styles.container}>
    <ScrollView style={theme.flexRow} horizontal>
      <AppBarTab text='Repositories' to='/' />
      {user && <AppBarTab text='Create a review' to='/review/create' />}
      {user && <AppBarTab text='My reviews' to='reviews' />}
      {!user ? <AppBarTab text='Sign in' to='/signin' /> : <AppBarTab text='Sign out' to='/' onPress={onSignOut} />}
      {!user && <AppBarTab text='Sign up' to='/signup' />}
    </ScrollView>
  </View>;
};

export default AppBar;

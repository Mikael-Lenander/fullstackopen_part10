import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    opacity: 0.8,
    backgroundColor: 'black',
    height: 100
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView style={theme.flexRow} horizontal>
      <AppBarTab text='Repositories' to='/' />
      <AppBarTab text='Sign in' to='/signin' />
    </ScrollView>
  </View>;
};

export default AppBar;

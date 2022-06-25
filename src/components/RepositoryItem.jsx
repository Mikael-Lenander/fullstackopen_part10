import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import Count from './Count'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 8,
    marginRight: 8
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 8
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5
  },
  infoContainer: {
    ...theme.flexColumn, 
    alignItems: 'flex-start', 
    maxWidth: 250,
    marginBottom: 5
  },
  countContainer: {
    ...theme.flexRow,
    justifyContent: 'space-around'
  }
})

const RepositoryItem = ({ item }) => {
  return <View style={styles.container}>
    <View style={[theme.flexRow, { justifyContent: 'flex-start' } ]}>
      <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }}/>
      <View style={styles.infoContainer}>
        <Text fontWeight='bold' >{item.fullName}</Text>
        <Text>{item.description}</Text>
        <View style={styles.languageContainer}>
          <Text color='white'>{item.language}</Text>
        </View>
      </View>
    </View>
    <View style={styles.countContainer} >
      <Count text='Stars' count={item.stargazersCount} format />
      <Count text='Forks' count={item.forksCount} format />
      <Count text='Reviews' count={item.reviewCount} />
      <Count text='Rating' count={item.ratingAverage} />
    </View>

  </View>
}

export default RepositoryItem
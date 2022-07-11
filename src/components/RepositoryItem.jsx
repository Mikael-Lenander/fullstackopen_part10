import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import Count from './Count'
import Card from './Card'

export const styles = StyleSheet.create({
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
  },
  upperContainer: {
    ...theme.flexRow,
    justifyContent: 'flex-start'
  }
})

const RepositoryItem = ({ item, children }) => {
  return (
    <Card testID="repositoryItem">
        <View style={styles.upperContainer}>
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
          <Count testID='Stars' text='Stars' count={item.stargazersCount} format />
          <Count testID='Forks' text='Forks' count={item.forksCount} format />
          <Count testID='Reviews' text='Reviews' count={item.reviewCount} />
          <Count testID='Rating' text='Rating' count={item.ratingAverage} />
        </View>
        {children}
      </Card>
  )
}

export default RepositoryItem
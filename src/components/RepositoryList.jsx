import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native'
import RepositoryListHeader from './RepositoryListHeader'
import { useState } from 'react'
import { orderSettings } from './RepositoryListHeader';
import Text from './Text'
import { useDebounce } from 'use-debounce'
import React from 'react'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    // this.props contains the component's props
    const { order, setOrder, searchWord, setSearchWord } = this.props;
    return (
      <RepositoryListHeader
        order={order} setOrder={setOrder} searchWord={searchWord} setSearchWord={setSearchWord} 
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReach } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => 
          <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
            <RepositoryItem key={item.id} item={item} />
          </Pressable>
        }
      />
    );
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')
  const [searchWord, setSearchWord] = useState('')
  const [debounceSearchWord] = useDebounce(searchWord, 500)
  const orderConfig = orderSettings[order]
  const { repositories, loading, fetchMore } = useRepositories({
    first: 8,
    orderDirection: orderConfig.direction,
    orderBy: orderConfig.by,
    searchKeyword: debounceSearchWord
  })
  const navigate = useNavigate()
  const onEndReach = () => {
    fetchMore()
  };

  return (
    <RepositoryListContainer 
      repositories={repositories}
      loading={loading}
      navigate={navigate} 
      order={order} 
      setOrder={setOrder}
      searchWord={searchWord}
      setSearchWord={setSearchWord}
      onEndReach={onEndReach}
    />
  )
};

export default RepositoryList
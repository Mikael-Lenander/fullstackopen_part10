import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { Searchbar } from 'react-native-paper';

const CREATE_AT = 'CREATED_AT'
const RATING_AVERAGE = 'RATING_AVERAGE'
const ASC = 'ASC'
const DESC = 'DESC'

export const orderSettings = {
  latest: { by: CREATE_AT, direction: DESC },
  highest: { by: RATING_AVERAGE, direction: DESC },
  lowest: { by: RATING_AVERAGE, direction: ASC }
}

export default function RepositoryListHeader({ order, setOrder, searchWord, setSearchWord }) {

  return (
    <View>
      <Searchbar 
        placeholder='Filter repositories'
        onChangeText={setSearchWord}
        value={searchWord}
      />
      <Picker
        selectedValue={order}
        onValueChange={setOrder}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated repositories' value='highest' />
        <Picker.Item label='Lowest rated repositories' value='lowest' />
      </Picker>
    </View>
  )
}
import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchInput = () => {

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.textInput}
      />
      <Ionicons
        name='search'
        size={20}
        color='hsl(0, 0%, 50%)'
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  textInput: {
    paddingLeft: 35,
    paddingTop: 8,
    paddingBottom: 8,
    height: 35,
    width: 190,
    borderRadius: 20,
    backgroundColor: 'hsl(0, 0%, 93%)',
  },
  searchIcon: {
    position: 'absolute',
    top: 18,
    left: 10,
  },
});

export default SearchInput;

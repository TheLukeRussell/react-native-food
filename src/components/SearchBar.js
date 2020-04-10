import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name='search' />
      <TextInput
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginVertical: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;

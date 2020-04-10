import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'los angeles',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar onTermSubmit={searchApi} term={term} onTermChange={setTerm} />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  // const [results, setResults] = useState([]);
  // const [errorMessage, setErrorMessage] = useState('');

  // const searchApi = async (searchTerm) => {
  //   try {
  //     const response = await yelp.get('/search', {
  //       params: {
  //         limit: 50,
  //         term: searchTerm,
  //         location: 'los angeles',
  //       },
  //     });
  //     setResults(response.data.businesses);
  //   } catch (err) {
  //     // console.log(err);
  //     setErrorMessage('Something went wrong');
  //   }
  // };

  // useEffect(() => {
  //   searchApi('pasta');
  // }, []);

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

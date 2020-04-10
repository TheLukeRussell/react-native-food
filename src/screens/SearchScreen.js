import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  console.log(results.phone);

  const filterResultsByPrice = (price) => {
    return results.filter( result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={(newTerm) => setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

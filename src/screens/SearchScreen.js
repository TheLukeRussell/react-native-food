import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={(newTerm) => setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$' || '$$$$')} title='Big Spender' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import {images} from '../utils/CoinIcons';
import {round} from '../utils/Constant';
const Details = ({navigation, route}) => {
  const [coin, setCoin] = useState({
    circulating_supply: 0,
    cmc_rank: 0,
    date_added: '',
    id: 0,
    last_updated: '',
    max_supply: 0,
    name: '',
    num_market_pairs: 0,
    platform: null,
    quote: {
      USD: {
        fully_diluted_market_cap: 1363149826354.31,
        last_updated: '2021-11-12T05:28:02.000Z',
        market_cap: 1224936560217.8376,
        market_cap_dominance: 0.0,
        percent_change_1h: 0.0,
        percent_change_24h: 0.0,
        percent_change_30d: 0.0,
        percent_change_60d: 0.0,
        percent_change_7d: 0.0,
        percent_change_90d: 0.0,
        price: 0.0,
        volume_24h: 0.0,
        volume_change_24h: 0.0,
      },
    },
    slug: '',
    symbol: '',
    tags: [],
    total_supply: 18870756,
  });

  useEffect(() => {
    const {item} = route.params;
    setCoin(item);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          elevation: 5,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}>
        <Image
          source={{uri: images[coin.symbol]}}
          style={styles.image}
          width={100}
          height={100}
        />
        <View
          style={{
            backgroundColor: 'red',
            marginStart: 5,
            padding: 20,
            flex: 1,
          }}>
          <Text style={styles.title}>{coin.name}</Text>
          <Text style={styles.subtitle}>${round(coin.quote.USD.price)}</Text>
          <Text style={styles.title}></Text>
        </View>
      </View>
      <Text style={[styles.title, {textAlign: 'center'}]}>
        Last Updated: {coin.last_updated}
      </Text>
      <Text style={[styles.title, {textAlign: 'center'}]}>
        Price: ${round(coin.quote.USD.price)}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{backgroundColor: 'lightblue', flex: 1, padding: 16}}>
          <Text>Name</Text>
          <Text>Symbol</Text>
          <Text>1 Hour</Text>
          <Text>24 Hour</Text>
          <Text>7 Days</Text>
          <Text>30 Days</Text>
          <Text>60 Days</Text>
          <Text>90 Days</Text>
        </View>
        <View style={{backgroundColor: 'pink', flex: 0.5, padding: 16}}>
          <Text>{coin.name}</Text>
          <Text>{coin.symbol}</Text>
          <Text>{round(coin.quote.USD.percent_change_1h)}%</Text>
          <Text>{round(coin.quote.USD.percent_change_24h)}%</Text>
          <Text>{round(coin.quote.USD.percent_change_7d)}%</Text>
          <Text>{round(coin.quote.USD.percent_change_30d)}%</Text>
          <Text>{round(coin.quote.USD.percent_change_60d)}%</Text>
          <Text>{round(coin.quote.USD.percent_change_90d)}%</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 0,
    height: 0,
    resizeMode: 'contain',
  },
});
export default Details;

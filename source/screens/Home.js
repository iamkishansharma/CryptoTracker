import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
// redux
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../actions/FetchCoinData';

// env data
import {URL, KEY, round} from '../utils/Constant';
// componments
import Header from '../components/Header';
import ListItem from '../components/ListItem';

class Home extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
    console.log('home component will mount..');
  }

  render() {
    const {crypto} = this.props;

    if (crypto.isFetching) {
      console.log('Loading......', URL, KEY);
      console.log('Data......', crypto.data);
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Spinner
            visible={crypto.isFetching}
            textContent="Loading..."
            animation="fade"
            textStyle={{
              color: 'green',
              width: '100%',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Welcome, Kishan"
          titleColor="black"
          hasButton={true}
          buttonIcon="settings-outline"
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}
        />

        <View style={styles.bodyBox}>
          {!this.props.crypto.hasError ? (
            <FlatList
              data={this.props.crypto.data.data}
              keyExtractor={(item, index) => item.symbol}
              renderItem={({item, index}) => (
                <ListItem
                  key={index}
                  name={item.name}
                  symbol={item.symbol}
                  price={round(item.quote.USD.price)}
                  change={round(item.quote.USD.percent_change_24h)}
                  onPress={() => {
                    this.props.navigation.navigate('Details', {item});
                  }}
                />
              )}
            />
          ) : (
            <View style={{backgroundColor: 'blue'}}>
              <Text
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Sorry!{'\n'}
                No internet connection
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyBox: {
    paddingVertical: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
  },
});
// Redux pattern

function mapStateToProp(state) {
  return {crypto: state.crypto};
}
export default connect(mapStateToProp, {FetchCoinData})(Home);

import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
// redux
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../actions/FetchCoinData';

// componments
import Header from '../components/Header';
import ListItem from '../components/ListItem';

class Home extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const {crypto} = this.props;
    return crypto.data.map(coin => (
      <ListItem
        key={coin.name}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.price_usd}
        change={coin.percentage_change_24hr}
      />
    ));
  }

  render() {
    const {crypto} = this.props;
    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent="Loading..."
            textStyle={{color: 'red'}}
            animation="fade"
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
            navigation.navigate('Settings');
          }}
        />

        <View style={styles.divider} />

        <View style={styles.bodyBox}>
          <ScrollView>{this.renderCoinCards()}</ScrollView>
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
    backgroundColor: 'white',
    marginHorizontal: 10,
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

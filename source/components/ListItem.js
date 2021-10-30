import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../utils/CoinIcons';

export default function ListItem({name, symbol, price, change}) {
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <View style={styles.leftSide}>
        <Image
          width={1}
          height={1}
          source={{
            uri: images[symbol]
              ? images[symbol]
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png',
          }}
          style={styles.image}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>${price}</Text>
          <Text
            style={[
              styles.subtitle,
              {color: change < 0 ? 'red' : 'lightgreen', textAlign: 'right'},
            ]}>
            {change < 0 ? change : '+' + change}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    // backgroundColor: 'purple',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    elevation: 5,
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 100,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
  subtitle: {
    color: 'gray',
    fontSize: 14,
    marginTop: 4,
  },
});

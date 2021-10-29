import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
export default function Details() {
  return (
    <SafeAreaView>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

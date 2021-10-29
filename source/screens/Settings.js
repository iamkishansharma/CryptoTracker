import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Settings</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  heading: {
    fontSize: 20,
    color: 'red',
  },
});

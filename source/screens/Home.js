import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Markets"
        hasButton={true}
        buttonIcon="settings-outline"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
      <View style={styles.bodyBox}>
        <Text>Hello and Namastey</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bodyBox: {
    paddingHorizontal: 16,
    backgroundColor:'red',
    flex:1
  },
});
export default Home;

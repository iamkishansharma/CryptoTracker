import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './screens/Home';
import Details from './screens/Details';
import Settings from './screens/Settings';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// redux
import {Provider} from 'react-redux';
import {Store} from './Store';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              title: 'CryptoTracker',
              headerTitleAlign: 'left',
              headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
              headerTintColor: 'red',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => alert('This is a button!')}
                  color="#fff">
                  <Icon name="settings" size={30} color="gray" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Coin Details',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
              headerTintColor: 'red',
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Settings',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
              headerTintColor: 'gray',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

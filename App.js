import * as React from 'react';
import { View, Text } from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
import TodoScreen from './src/screens/TodoScreen';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
import TodoAddScreen from './src/screens/TodoAddScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import {store} from './src/redux/store';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sign In">
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="TodoScreen" component={TodoScreen} />
            <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
            <Stack.Screen name="TodoAddScreen" component={TodoAddScreen} />
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  ) }

export default App;
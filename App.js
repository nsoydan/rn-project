import * as React from 'react';
import { View, Text } from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
import TodoScreen from './src/screens/TodoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
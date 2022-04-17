import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screens/SignInScreen'
import MenuScreen from '../screens/MenuScreen'
import YolHaritasiListesiScreen from '../screens/YolHaritasiListesiScreen'

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="YolHaritasiListesiScreen" component={YolHaritasiListesiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
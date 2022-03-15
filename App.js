import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contacts from './src/pages/Contacts/'
import Information from './src/pages/Information'

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen></Stack.Screen>
        <Stack.Screen></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

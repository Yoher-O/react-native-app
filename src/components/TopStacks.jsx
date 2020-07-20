import React from 'react';
import Top from '../views/Top';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const TopStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='top' component={Top} options={{ title: 'Top' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default TopStacks;
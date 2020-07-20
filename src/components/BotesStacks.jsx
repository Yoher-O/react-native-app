import React from 'react';
import Botes from '../views/Boats';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const BotesStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='boat' component={Botes} options={{ title: 'Botes' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default BotesStacks;
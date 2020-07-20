import React from 'react';
import Favorites from '../views/Favorites';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const FavoritesStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='favorites' component={Favorites} options={{ title: 'Favoritos' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default FavoritesStacks;
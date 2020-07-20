import React from 'react'
import AccountStacks from './AccountStacks';
import BotesStacks from './BotesStacks';
import FavoritesStacks from './FavoritesStacks';
import TopStacks from './TopStacks';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Navigation = () => {

  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case 'Botes':
        iconName = 'anchor'
        break;

      case 'Account':
        iconName = 'account'
        break;

      case 'Favorites':
        iconName = 'heart-outline'
        break;

      case 'Top':
        iconName = 'star-outline'
        break;
    }
    return (<Icon type="material-community" size={22} name={iconName} color={color} />)
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Account"
        tabBarOptions={{
          inactiveTintColor: '#3c4c66',
          activeTintColor: '#1256ff'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen name="Account" options={{ title: 'Perfil' }} component={AccountStacks} />
        <Tab.Screen name="Botes" options={{ title: 'Botes' }} component={BotesStacks} />
        <Tab.Screen name="Favorites" options={{ title: 'Favoritos' }} component={FavoritesStacks} />
        <Tab.Screen name="Top" options={{ title: 'Top' }} component={TopStacks} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
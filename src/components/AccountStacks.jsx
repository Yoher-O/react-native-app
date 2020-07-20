import React from 'react';
import Account from '../views/Account/Account';
import Login from '../views/Account/Login';
import SingUp from '../views/Account/SingUp';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const AccountStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='account' component={Account} options={{ title: 'Perfil' }}></Stack.Screen>
      <Stack.Screen name='login' component={Login} options={{ title: 'Iniciar sesión' }}></Stack.Screen>
      <Stack.Screen name='singUp' component={SingUp} options={{ title: 'Registro' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AccountStacks;
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'


const style = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 30,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  createText: {
    color: '#00a680'
  },
  divider: {
    margin: 40,
    backgroundColor: '#1256ff'
  }
})

const Login = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Image source={require('../../assets/logo.png')} style={style.logo} />
      <View style={style.viewContainer}>
        <Text>Incio de sesión</Text>
        <Text style={style.createText} onPress={() => navigation.navigate('singUp')}>Crear cuenta</Text>
      </View>
      <Divider style={style.divider} />
    </ScrollView>
  )
}

export default Login;
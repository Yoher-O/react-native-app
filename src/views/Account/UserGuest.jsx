import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const style = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40
  },
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  boldText: {
    color: '#1256ff',
    fontStyle: 'normal'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#00a680'
  },
  btnContainer: {
    width: '70%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40
  }
})

const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={style.viewBody}>
      <Image
        source={require('../../assets/user-guest.jpg')}
        resizeMode="contain"
        style={style.image}
      />
      <Text style={style.text}>Crea tu perfil en <Text style={style.boldText}>Boat By Tour</Text> </Text>
      <View style={style.container}>
        <Button title='Ver Perfil'
          buttonStyle={style.button}
          containerStyle={style.btnContainer}
          onPress={() => navigation.navigate('login')} />
      </View>
    </ScrollView>
  )
}

export default UserGuest;
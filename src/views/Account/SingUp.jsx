import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Divider } from 'react-native-elements';
import SingUpForm from '../../components/Account/SingUpForm';

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
const SingUp = () => {

  return (
    <KeyboardAwareScrollView>
      <Image source={require('../../assets/logo.png')} style={style.logo} />
      <View style={style.viewContainer}>
        <SingUpForm />
      </View>
      <Divider style={style.divider} />
    </KeyboardAwareScrollView>
  )
}

export default SingUp;
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { TextInput, HelperText } from 'react-native-paper';
import { validateEmail, isEmpty, minLength, compareText } from '../../utils/Validation';
import * as firebase from 'firebase';

const style = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  btnContainer: {
    marginTop: 10,
    width: '100%'
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
})
const SingUpForm = () => {
  const [form, setForm] = useState({
    email: null,
    password: null,
    repeatPassword: null
  })
  const [error, setError] = useState(false);

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.nativeEvent.text });
  }

  const handleSubmit = () => {
    if (!error) {
      firebase.auth().createUserWithEmailAndPassword({ email: form.email, password: form.password })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }

  const hasErrors = (name) => {
    let errors = false;
    if (
      isEmpty(form.email) ||
      isEmpty(form.password) ||
      isEmpty(form.repeatPassword)
    ) {
      return false;
    }
    switch (name) {
      case 'email':
        errors = !validateEmail(form.email)
        break;

      case 'password':
        errors = minLength(6, form.password);
        break;

      case 'repeatPassword':
        errors = compareText(form.password, form.repeatPassword);
        break;
    }
    setError(errors);
    return errors;
  }

  return (
    <View style={style.form}>
      <TextInput
        label='Correo electronico'
        style={style.inputForm}
        value={form.email}
        error={hasErrors('email')}
        onChange={handleChange('email')}
      />
      <HelperText type="error" visible={hasErrors('email')}>
        Formato no valido
      </HelperText>
      <TextInput
        label='Contraseña'
        secureTextEntry={true}
        style={style.inputForm}
        value={form.password}
        error={hasErrors('password')}
        onChange={handleChange('password')}
      />
      <HelperText type="error" visible={hasErrors('password')}>
        Formato no valido
      </HelperText>
      <TextInput
        label='Repetir contraseña'
        style={style.inputForm}
        value={form.repeatPassword}
        error={hasErrors('repeatPassword')}
        onChange={handleChange('repeatPassword')}
        secureTextEntry={true}
      />
      <HelperText type="error" visible={hasErrors('repeatPassword')}>
        Las contraseñas no coinsiden
      </HelperText>
      <Button title='Registrarse' onPress={handleSubmit} containerStyle={style.btnContainer} />
    </View>
  )
}

export default SingUpForm;
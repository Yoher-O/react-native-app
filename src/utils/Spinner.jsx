import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: '#fff',
    borderColor: `#${Math.random().toString(16).substr(-6)}`,
    borderWidth: 3,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: `#${Math.random().toString(16).substr(-6)}`,
    textTransform: 'uppercase',
    marginTop: 10
  }
})

export default Spinner = (props) => {
  const { isShow, text } = props;

  return (
    <Overlay
      isVisible={isShow}
      windowBackgroundColor='rgba(0,0,0,0.5)'
      overlayBackgroundColor='transparent'
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color={`#${Math.random().toString(16).substr(-6)}`} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  )
}

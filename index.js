import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native'

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.wrapper}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default DismissKeyboard

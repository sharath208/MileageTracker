import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const FloatingLabelTextInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={[styles.placeholder, { top: text ? -20 : 10 }]}>Your Placeholder</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    fontSize: 16,
    color: 'gray',
  },
});

export default FloatingLabelTextInput;

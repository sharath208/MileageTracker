import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {Scatter} from './ReusableComp/Chart' 
const FloatingLabelTextInput = () => {
  const [text, setText] = useState('');

  return (
    <Scatter/>
  );
};

export default FloatingLabelTextInput;

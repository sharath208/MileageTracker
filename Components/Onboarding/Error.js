// ImageContentPage.js

import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const ImageContentPage = () => {
  return (
    <LinearGradient
      colors={['#C5E3DC', '#F6F6EC']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    <View>
      <Text>Oops!</Text>
      <Text >Something went wrong please tryagain later!</Text>'
      <Button title="Go Back"/>
    </View>
    </LinearGradient>
  );
};

export default ImageContentPage;

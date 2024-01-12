import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CenteredImages = () => {
  return (
    <View style={styles.container}>
      <View >
        <Image
          source={require('./images/ic_launcher.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View >
        <Image
          source={require('./images/Onboarding_bottom.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10, // Adjust the vertical spacing between the images
  },
  image: {
    width: 200, // Set your desired width
    height: 200, // Set your desired height
  },
});
export default CenteredImages;
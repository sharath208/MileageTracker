import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUp'); 
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FF4E4E" }}>
      <Image source={require('./Components/images/ic_launcher.png')} style={{ height: 150, width: 150 }} />
    </View>
  );
};

export default Splash;

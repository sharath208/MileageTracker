import React from 'react';
import { View, Text, Button } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const switchProfile = () => {
    navigation.navigate('Home');
  };

  const deleteAccount = () => {
  };

  const signOut = () => {
  };

  return (
    <View>
      <Button title="Switch Profile" onPress={switchProfile} />
      <Button title="Delete Account" onPress={deleteAccount} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default DrawerContent;

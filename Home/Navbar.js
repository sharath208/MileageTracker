import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const InlineButtons = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >
      <Text style={styles.buttonText}>Refuelling</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
    >
        <Text style={styles.buttonText}>Performance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Vehicles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InlineButtons;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const DatePickerExample = () => {
  const [chosenDate, setChosenDate] = useState('');

  const handleDateChange = (date) => {
    setChosenDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Date:</Text>
      <DatePicker
        style={styles.datePicker}
        date={chosenDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={handleDateChange}
      />
      <Text style={styles.selectedDate}>
        Selected Date: {chosenDate ? chosenDate : 'No date selected'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default DatePickerExample;

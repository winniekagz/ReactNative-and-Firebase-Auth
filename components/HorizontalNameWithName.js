import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/Colors';

const HorizontalLineWithName = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey, // Adjust the color as needed
    marginHorizontal: 30, // Adjust the margin as needed
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5, // Adjust the margin as needed
  },
});

export default HorizontalLineWithName;

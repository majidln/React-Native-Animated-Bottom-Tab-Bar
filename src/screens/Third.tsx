import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>ThirdScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

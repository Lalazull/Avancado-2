import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function App2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.cor1]} />
      <View style={[styles.box, styles.cor2]} />
      <View style={[styles.box, styles.cor3]} />
      <View style={[styles.box, styles.cor4]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    flexBasis: '50%',
    height: '50%',
  },
  cor1: {
    backgroundColor: 'rgb(130, 2, 190)',
  },
  cor2: {
    backgroundColor: 'rgb(144, 0, 255)',
  },
  cor3: {
    backgroundColor: 'rgb(88, 78, 223)',
  },
  cor4: {
    backgroundColor: 'rgb(0, 140, 255)',
  },
});
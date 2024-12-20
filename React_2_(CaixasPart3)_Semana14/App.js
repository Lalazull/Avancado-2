import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function App3() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.row}>
        <View style={[styles.block, styles.caixa1, { flex: 3 }]} />
        <View style={[styles.block, styles.caixa3, { flex: 1 }]} />
      </View>


      <View style={styles.row}>
        <View style={[styles.block, styles.caixa1, { flex: 2 }]} />
        <View style={[styles.block, styles.caixa4, { flex: 1 }]} />
        <View style={[styles.block, styles.caixa2, { flex: 1 }]} />
      </View>


      <View style={styles.row}>
        <View style={[styles.block, styles.caixa1, { flex: 0.5 }]} />
        <View style={[styles.block, styles.caixa3, { flex: 0.5 }]} />
        <View style={[styles.block, styles.caixa2, { flex: 1 }]} />
      </View>


      <View style={styles.row}>
        <View style={[styles.block, styles.caixa4, { flex: 1 }]} />
        <View style={[styles.block, styles.caixa2, { flex: 3 }]} />
      </View>


      <View style={styles.row}>
        <View style={[styles.block, styles.caixa3, { flex: 1 }]} />
        <View style={[styles.block, styles.caixa1, { flex: 0.5 }]} />
        <View style={[styles.block, styles.caixa2, { flex: 0.5 }]} />
      </View>


      <View style={styles.row}>
        <View style={[styles.block, styles.caixa3, { flex: 3 }]} />
        <View style={[styles.block, styles.caixa4, { flex: 1 }]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  block: {
    height: '100%',
    margin: 0,
  },
  caixa1: {
    backgroundColor: 'rgb(130, 2, 190)',
  },
  caixa3: {
    backgroundColor: 'rgb(88, 78, 223)',
  },
  caixa4: {
    backgroundColor: 'rgb(144, 0, 255)',
  },
  caixa2: {
    backgroundColor: 'rgb(0, 140, 255)',
  },
});

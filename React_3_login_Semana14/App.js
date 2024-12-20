import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="rgb(100, 102, 237)"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="rgb(100, 102, 237)"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>
          Criar uma conta
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(194, 208, 252)',
  },
  header: {
    backgroundColor: 'rgb(100, 102, 237)',
    padding: 30,
    alignItems: 'center',
  },
  headerText: {
    color: 'rgb(202, 190, 253)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'rgb(202, 190, 253)',
    borderWidth: 1,
    borderTopColor: 'rgb(202, 190, 253)',
    borderLeftColor: 'rgb(202, 190, 253)',
    borderRightColor: 'rgb(202, 190, 253)',
    borderBottomColor: 'rgb(142, 120, 240)',
    borderBottomWidth: 3,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    width: '100%',

  },
  button: {
    backgroundColor: 'rgb(100, 102, 237)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'rgb(202, 190, 253)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'rgb(177, 13, 114)',
    fontSize: 14,
    fontWeight: 'bold'
  },
});
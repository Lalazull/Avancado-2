import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, View, Button, FlatList, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Lista />
    </SafeAreaView>
  );
}

function Lista() {
  const [tarefa, setTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [datas, setDatas] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);
  const [erro, setErro] = useState('');

  const novaTarefa = () => {
    if (!tarefa || !descricao || !datas) {
      setErro('Os campos devem ser preenchidos');
    } else {
      setErro('');
      setListaTarefas(novaLista => [
        listaTarefas,
        { id: Math.random().toString(), titulo: tarefa, descri: descricao, dat: datas }
      ]);

      setTarefa('');
      setDescricao('');
      setDatas('');
    }
  };

  function Item(props) {
    return (
      <View style={styles.listaItem}>
        <Text style={styles.textItem}>Tarefa: {props.titulo} - Descrição: {props.descri} - Data: {props.dat}</Text>
      </View>
    );
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        value={tarefa}
        placeholder='Digite sua tarefa.'
        onChangeText={setTarefa}
        style={styles.input}
      />
      <TextInput
        value={descricao}
        placeholder='Digite a descrição da tarefa.'
        onChangeText={setDescricao}
        style={styles.input}
      />
      <TextInput
        value={datas}
        placeholder='Digite a data da tarefa.'
        onChangeText={setDatas}
        style={styles.input}
      />
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}
      <Pressable
        onPress={novaTarefa}
        style={({ pressed }) => [
          styles.botao,
          { backgroundColor: pressed ? 'rgb(255, 5, 5)' : 'rgb(146, 0, 208)' }
        ]}
      >
        <Text style={styles.botaoText}>Adicionar tarefa</Text>
      </Pressable>

      <FlatList
        data={listaTarefas}
        renderItem={it => <Item titulo={it.item.titulo} descri={it.item.descri} dat={it.item.dat} />}
        keyExtractor={it => it.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'cursive'
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgb(146, 0, 208)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'cursive'
  },
  botao: {
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  botaoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'cursive'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'cursive'
  },
  listaItem: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
  },
  textItem: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'cursive'
  }
});
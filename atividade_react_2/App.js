import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, View, Button,FlatList,Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <ListaDeTafera />
    </SafeAreaView>
  );
}

function ListaDeTafera() {
  const [tarefa, setTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [datas, setDatas] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]); 

  novaTarefa = () => setListaTarefas(novaLista => [...listaTarefas,
    { id: Math.random().toString(), titulo: tarefa, descricao: descricao, datta: datas }
    ]);

    function Item(props) {
      return (
        <View style={{ backgroundColor: 'purple', padding: 15, margin: 10,borderRadius:20 }}>
          <Text style={{fontSize:15 ,color:"white"}}>Tarefa:{props.titulo} - Descricao:{props.descricao} - Data:{props.datta}</Text>
        </View>
      )
    }
    return (
    <View>
      <TextInput value={tarefa} placeholder={'Digite o nome tarefa.'} onChangeText={(tarefa) => setTarefa(tarefa)} ></TextInput>
      <TextInput value={descricao} placeholder={'Digite a descrição a tarefa.'} onChangeText={(descricao) => setDescricao(descricao)} ></TextInput>
      <TextInput value={datas} placeholder={'Digite a data da tarefa. Ex.:aa/mm/yyyy'} onChangeText={(datas) => setDatas(datas)} ></TextInput>
      <Button onPress={novaTarefa} title='Adicionar tarefa'></Button>

      <FlatList
        data={listaTarefas}
        renderItem={it => <Item titulo={it.item.titulo} descricao={it.item.descricao} datta={it.item.datta} />}
        keyExtractor={it => it.id}
      >
      </FlatList>
    </View>
  )
}
import React, { useState } from 'react';
import { StatusBar, TextInput, View, Text, Button, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Resultado />
    </View>
  );
}

function Resultado() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [Imagem, setImagem] = useState('');

  var fisico;
  Imc = () => {
    const imc = (parseInt(peso) / (altura ** 2)).toFixed(1);
    if (imc < 18.5) {
      fisico = "Abaixo do Peso"
      setImagem('https://cdn.pixabay.com/photo/2022/03/20/15/04/male-7081078_640.jpg')
    }
    if (imc >= 18.5 && imc < 24.9) {
      fisico = "Peso Normal"
      setImagem('https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg')
    }
    if (imc >= 25 && imc < 30) {
      fisico = "Sobrepeso"
      setImagem('https://cdn.pixabay.com/photo/2015/11/20/12/05/british-cat-1052933_640.jpg')
    }
    if (imc >= 30 && imc < 35) {
      fisico = "Obesidade Grau I"
      setImagem('https://cdn.pixabay.com/photo/2020/10/10/06/04/cat-5642101_640.jpg')
    }
    if (imc >= 35 && imc < 40) {
      fisico = "Obesidade Grau II"
      setImagem('https://cdn.pixabay.com/photo/2022/11/04/17/43/pot-bellied-pig-7570421_640.jpg')
    } else if (imc >= 40) {
      fisico = "Obesidade Mórbida"
      setImagem('https://cdn.pixabay.com/photo/2024/04/26/09/11/ai-generated-8721439_640.jpg')
    }
    alert(` O Resultado é:\n IMC = ${imc}\n fisico: ${fisico}`)
  }
  return (
    <View>
      <TextInput style={{ margin: 5, borderStyle: 'solid', borderWidth: 1, borderRadius: 20 }} value={altura} keyboardType='numeric' placeholder={'Digite Sua Altura. Ex.: 1.70'} onChangeText={(altura) => setAltura(altura)} ></TextInput>
      <TextInput style={{ margin: 5, borderStyle: 'solid', borderWidth: 1, borderRadius: 20 }} value={peso} keyboardType='numeric' placeholder={'Digite Seu Peso. Ex.: 70'} onChangeText={(peso) => setPeso(peso)} ></TextInput>
      <Button color="#f194ff" onPress={Imc} title='Calcular Imc'></Button>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 20 }}>Você se encontra nesse estado:</Text>
        <Image style={{ height: 250, width: 250 }} source={{ uri: Imagem }} />
      </View>

    </View>
  )
}
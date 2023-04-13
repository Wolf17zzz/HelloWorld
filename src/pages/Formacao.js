import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Formacao = () => {
return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo!</Text>
      
      <Text>Meu nome é Arthur e esse é meu primeiro app em react!</Text>

      <button title="Voltar" onPress={ () => navigation.goBack()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },

  titulo:{
    backgroundColor: "#9F83F9",
    padding: 10,
    borderRadius: 5
  }
});

export default Formacao;

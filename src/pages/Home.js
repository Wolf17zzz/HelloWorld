import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigator }) => {
  return (
    <View>
      <Text>Olá Mundo!</Text>
        <button title="Formacao" onPress={ () => navigation.navigate('Formacao')}/>
      <Text>Meu nome é Arthur e esse é meu primeiro app em react!</Text>
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
  

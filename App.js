
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Home from './src/pages/Formacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>

        <Stack.Screen name="Formacao" component={Formacao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo!</Text>
      
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

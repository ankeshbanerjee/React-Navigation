import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './components/Menu';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

const Stack = createNativeStackNavigator();

export default function App() {

  const myStyle = {
    headerTitleAlign : 'center',
          headerShadowVisible : false,
          headerStyle : {
            backgroundColor : '#03C988'
          },
          headerTintColor : '#fff',
          headerTitleStyle : {
            color : 'white',
            fontWeight  : 'bold'
          }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={myStyle}/>
        <Stack.Screen name="About" component={About} options={myStyle}/>
        <Stack.Screen name="Contact" component={Contact} options={myStyle}/>
      </Stack.Navigator>
      <Menu/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position : 'relative',
    alignItems : 'center'
  },
});

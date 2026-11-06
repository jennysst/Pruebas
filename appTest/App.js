import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroScreen from './screens/RegistroScreen'
import SesionScreen from './screens/SesionScreen'
import InicioScreen from './screens/InicioScreen';

export default function App() {
  return (
    <InicioScreen></InicioScreen>
    //<RegistroScreen></RegistroScreen>
    //<SesionScreen></SesionScreen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

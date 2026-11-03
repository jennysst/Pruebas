import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroScreen from './screens/RegistroScreen'
import SesionScreen from './screens/SesionScreen'

export default function App() {
  return (
    <SesionScreen></SesionScreen>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroScreen from './screens/RegistroScreen'
import SesionScreen from './screens/SesionScreen'
import InicioScreen from './screens/InicioScreen';
import CategoriaScreen from './screens/CategoriaScreen';
import CursoDispScreen from './screens/CursoDispScreen';
import SolicitarCursoScreen from './screens/SolicitarCursoScreen';
import VerCurso from './screens/VerCurso';
import FavoritosScreen from './screens/FavoritosScreen';


export default function App() {
  return (
    //<InicioScreen></InicioScreen>
    //<RegistroScreen></RegistroScreen>
    //<SesionScreen></SesionScreen>
    //<CategoriaScreen></CategoriaScreen>
    //<CursoDispScreen></CursoDispScreen>
    //<SolicitarCursoScreen></SolicitarCursoScreen>
    <VerCurso></VerCurso>
    //<FavoritosScreen></FavoritosScreen>
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

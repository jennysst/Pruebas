//SCREEN PARA EL INICIO

import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import BarraSuperior from "../components/BarraSuperior";
import TituloSeccion from "../components/TituloSeccion";

export default function InicioScreen(){
    return(
        <View style = {styles.container}>
            <BarraSuperior></BarraSuperior>
            <TituloSeccion
                titulo={'INICIO'}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F7',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
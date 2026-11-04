//SCREEN PARA EL INICIO

import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import BarraSuperior from "../components/BarraSuperior";
import TituloSeccion from "../components/TituloSeccion";

export default function InicioScreen(){
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.superior}>
                <BarraSuperior/>
                <TituloSeccion
                titulo={'INICIO'}
                />
            </View>
            <ScrollView>
                <View style = {styles.contenido}>
                    <Text>Ej--------------</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cad2c5',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    superior:{
        width: '100%',
        alignItems: 'center',
    },
    contenido:{
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
})
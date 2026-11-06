//SCREEN PARA EL INICIO

import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import BarraSuperior from "../components/BarraSuperior";
import TituloSeccion from "../components/TituloSeccion";
import InicioCaja from "../components/InicioCaja";
import BarraInferior from "../components/BarraInferior";

export default function InicioScreen(){

    const listaInicioCajas = Array.from({length: 8}, (_, index) => ({
        id: index + 1,
        nombre: 'Nombre',
        hrs: 'Hrs',
        calificacion: 'Calificación',
        creador: 'Creador'
    }));

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.superior}>
                <BarraSuperior/>
                <TituloSeccion
                titulo={'INICIO'}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator = {false} style = {styles.scroll}>
                <View style = {styles.contenido}>
                    {listaInicioCajas.map((item) => (
                        <InicioCaja
                            key={item.id}
                            nombre = {item.nombre}
                            hrs = {item.hrs}
                            calificacion= {item.calificacion}
                            creador = {item.creador}
                        />
                    ))}
                        
                </View>
            </ScrollView>
            <BarraInferior/>
        </SafeAreaView>
    )
}
//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cad2c5',
        alignItems: 'center',
        paddingTop: 20,
    },
    scroll:{
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        width: '90%',
        borderWidth: 1,
    },
    superior:{
        width: '100%',
        alignItems: 'center',
    },
    contenido:{
        padding: 10,
        borderRadius: 20,
        borderColor: '#2f3e46',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
        
    },
})
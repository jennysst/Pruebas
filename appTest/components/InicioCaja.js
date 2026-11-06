//Cajas de la pantalla de inicio

import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function InicioCaja({nombre, hrs, calificacion, creador}){
    return(
        <View style = {styles.container}>
            <View style={styles.corazon}>
                <Text style = {styles.texto}>{nombre}</Text>
                <Image 
                    source={require('../assets/img/corazon.png')}
                    style = {styles.imgCorazon}
                />
            </View>
            <View style={styles.linea}>
                <Image 
                    source={require('../assets/img/Reloj.png')}
                    style = {styles.imagen}
                />
                <Text style = {styles.texto}>{hrs}</Text>
            </View>
            <View style={styles.linea}>
                <Image 
                    source={require('../assets/img/estrella.png')}
                    style = {styles.imagen}
                />
                <Text style = {styles.texto}>{calificacion}</Text>
            </View>
            <View style={styles.linea}>
                <Image 
                    source={require('../assets/img/Perfil.png')}
                    style = {styles.imagen}
                />
                <Text style = {styles.texto}>{creador}</Text>
            </View>
            <View style={styles.etiquetaContenedor}>
                <Image 
                    source={require('../assets/img/etiqueta.png')}
                    style = {styles.etiqueta}
                />
            </View>
        </View>
    )
}
//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cad2c5',
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
        width: '48%'
    },
    linea:{
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    imagen: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
        marginTop: 4,
    },
    corazon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgCorazon:{
        width: 25,
        height: 20,
        alignItems: 'flex-start',
        resizeMode: 'contain',
    },
    etiqueta:{
        width: 110,
        height: 30,
        resizeMode: 'stretch',
    },
    etiquetaContenedor:{
        marginTop: 15,
    },
    texto:{
        fontSize: 16,
        fontWeight:'bold',
        
    },
});

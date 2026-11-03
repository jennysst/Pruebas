
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function Boton({textoBoton, style}){
    return(
        <Pressable style = {[styles.boton, style]}>
            <Text style = {styles.texto}>{textoBoton}</Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin:5,
    },
    texto:{
        fontWeight: 'bold',
    },
});

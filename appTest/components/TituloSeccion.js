
import { StyleSheet, Text } from "react-native";

export default function TituloSeccion({titulo}){
    return(
        <Text style={styles.titulo}>{titulo}</Text>
    )
}

const styles = StyleSheet.create({
    titulo:{
        backgroundColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 20,
        padding: 3,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18,
        width: '90%'
    }
})

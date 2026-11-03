
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function TextoLink({linkTexto}){
    return(
        <Pressable>
            <Text style = {styles.texto}>{linkTexto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 30,
        margin: 5,
        textDecorationLine: 'underline'
    },
});

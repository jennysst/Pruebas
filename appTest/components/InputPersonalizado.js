
import { TextInput, Text, View, StyleSheet } from "react-native";

export default function InputPersonalizado({texto, relleno, valor, funcion}){
    return(
        <View style = {styles.container}>
            <Text style= {styles.texto}>{texto}</Text>
            <TextInput
                style = {styles.input}
                placeholder={relleno}
                value= {valor}
                onChangeText={funcion}
                placeholderTextColor='#909090'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#F5F5F5'
    },
    texto:{
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 14,
    }
});

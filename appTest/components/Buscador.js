//BUSCADOR

import { TextInput, Text, View, StyleSheet, Image,Pressable } from "react-native";

export default function Buscador({valor, funcion}){
    return(
        <View style = {styles.container} >
            <TextInput
                style = {styles.input}
                placeholder="Buscar"
                placeholderTextColor={'#1E1E1E'}
                value={valor}
                onChangeText={funcion}
            />
            <Pressable>
                <Image
                    source={require('../assets/img/Lupa.png')}
                ></Image>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        padding:5,
        paddingLeft:15,
        paddingRight: 15,
        backgroundColor: '#757575',
        justifyContent: 'space-between',
        width: '69%'
        
    },
    input:{
        outlineStyle: 'none',
        width:'100%'
    }
});

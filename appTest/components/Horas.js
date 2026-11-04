//COMPONENTE PARA MOSTRAR LAS HORAS

import { Pressable, Text, View, StyleSheet, Image } from "react-native";

export default function Horas({hrs}){
    return(
        <View style={styles.container} >
            <Pressable style= {styles.press}>
                <Image
                    source={require('../assets/img/Reloj.png')}
                    style = {styles.reloj}
                />
                <Text style={styles.horas} >{hrs}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        
    },
    press:{
        flexDirection:'row',
        backgroundColor: '#1E1E1E',
        borderRadius: 20,
        alignItems:'center',
        borderWidth:1,
        
    },
    reloj:{
        backgroundColor:'#757575',
        borderRadius: 20,
        borderWidth:2,
        borderColor: '#757575',
        margin:2,
    },
    horas:{
        marginLeft: 5,
        marginRight: 12,
        color: '#757575',
        fontWeight: 'bold'
    }
});

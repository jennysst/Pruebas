//Componente para el perfil

import { Image, StyleSheet,View, Pressable } from "react-native";

export default function Perfil(){
    return(
        <View>
            <Pressable style= {styles.press}>
                <Image
                    source={require('../assets/img/Perfil.png')}
                    style = {styles.imagen}
                ></Image>
            </Pressable>
                
        </View>
            
    )
}


const styles = StyleSheet.create({
    press:{
        backgroundColor: '#1E1E1E',
        width: 40,
        height: 40,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    imagen:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
})
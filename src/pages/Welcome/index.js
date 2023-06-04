import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Bem_Vindo(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image
                source={require('../../assets/logo.jpeg')}
                style={{widht:'100%'}}
                resizeMode='contain'  
            />
        </View>

           <View style={styles.containerForm}>
           
            <Text style={styles.title}>Queridos programadores seja bem-vindo ao Cheat Sheat</Text>           
            <Text style={styles.text}>Faça agora seu registro</Text>

            <TouchableOpacity 
            style={style.button}
            onPress= {() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

           </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#6719CD'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#6E1682',
        justifyContent:'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1.5,
        backgroundColor: '#FFF',
        borderTopLeftRadius:25,
        bolderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:22,
        fontWeight: 'bold',
        marginTop: 28,
        MarginBotton:12,
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position:'absolute',
        backgroundColor: '#CDBCBC',
        borderRadius: 50,
        paddingVertical: 8,
        widht: '60%',
        alignSelf: 'center',
        bottom: '45%',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#0F0510',
        fontWeight:'bold'
    }
})
import React from 'react';
import {View,Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';

export default function SignIn(){
    return (
        <View style={style.container}>
            <Text style={styles.message}>Registro</Text>
        <Text style={styles.title}>Registra-se</Text>
        <TextInput
            placeholder='Nome'
            style={styles.input}
        />
        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6719CD'
    },
    constainerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',     
    },
    message:{
        fontSize:28,
        fontWeight:"bold",
        color:'#FFF'
    },
    


})
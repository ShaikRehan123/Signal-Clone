import React, {useEffect, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native'
import {Button , Input , Image} from 'react-native-elements';
import {StatusBar} from "expo-status-bar";
import {auth} from "../firebase";
const LoginScreen = ({navigation}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // console.log(authUser);
            if(authUser){
                navigation.replace('Home')
            }
        })
        return unsubscribe;
    } , [])
    const signIn = () =>{
        auth.signInWithEmailAndPassword(email , password).catch(error => alert(error))
    }
    return(
        <KeyboardAvoidingView behavior='padding' style = {styles.container}>
            <StatusBar style='light' />
            {/*<Text>Login Screen</Text>*/}
            <Image source={{
                uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png'
            }}
            style={{width:200 , height:200 , margin:20 , borderRadius:30}}/>
            <View style={styles.input_container}>
                <Input placeholder='Email'
                       autoFocus
                       textContentType='emailAddress'
                       value={email}
                       onChangeText={text => setEmail(text)}
                />
                <Input placeholder='Password'
                       secureTextEntry
                       // autoFocus
                       textContentType='password'
                       value={password}
                       onChangeText={text => setPassword(text)}
                       onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type='outline' title='Register'/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
    },
    input_container:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})
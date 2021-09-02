import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {Input , Button , Text} from "react-native-elements";
import {auth} from "../firebase";

const RegisterScreen = ({navigation}) => {
    // const [name , SetName] =
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'Back To Login',
        })
    } , [navigation])
    const register = () => {
      auth.createUserWithEmailAndPassword(email , password).then((authUser) => {
          authUser.user.updateProfile({
              displayName: name,
              photoURL: imageUrl
                  ||
                  'https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6',
          }).then(console.log('Completed'));
      }).catch(error => alert(error.message));
    };
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Text h4 style={{marginBottom:50}}>
                Create An Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Full Name'
                       autoFocus textContentType='name' value={name} onChangeText={text =>  setName(text)}/>
                <Input placeholder='Email'
                       textContentType='emailAddress' value={email} onChangeText={text =>  setEmail(text)}/>
                <Input placeholder='Password'
                       secureTextEntry textContentType='password' value={password} onChangeText={text =>  setPassword(text)}/>
                <Input placeholder='Profile Picture Url (optional)'
                       textContentType='URL' value={imageUrl} onChangeText={text =>  setImageUrl(text)} onSubmitEditing={register}/>
            </View>

            <Button containerStyle={styles.button} raised title='Register' onPress={register}/>
            {/*<View style={{height:100 }}/>*/}
            {/*<Text>Register Screen</Text>*/}
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
    },
    button:{
        width:200,
        marginTop:10,
    },
    inputContainer:{
        width:300,
    }
})
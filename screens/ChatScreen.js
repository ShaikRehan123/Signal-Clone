import React, {useLayoutEffect, useState} from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {Avatar} from "react-native-elements";
import { FontAwesome , Ionicons , AntDesign} from '@expo/vector-icons'
import {StatusBar} from "expo-status-bar";

const ChatScreen = ({navigation , route}) => {

    const [input , setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible:false,
            headerTitle: () => (
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                    <Avatar rounded source={{
                        uri: 'https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6'
                    }}/>
                    <Text style={{color:'white' , marginLeft:10 , fontWeight:'700'}}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft : () => (
                <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} style={{marginLeft:10}} onPress={navigation.goBack}>
                    <AntDesign name='arrowleft' size={24} color='white'/>
                </TouchableOpacity>
            ),
            headerRight : () => (
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:80,
                    marginRight:20,
                }}>
                    <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} style={{marginRight:25}}>
                        <FontAwesome name='video-camera' size={24} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} style={{marginRight:25}}>
                        <Ionicons name='call' size={24} color='white' />
                    </TouchableOpacity>
                </View>
            )
        })
    }  , [navigation])

    const sendMessage = () => {

    }

    return (
        <SafeAreaView style={{flex:1 , backgroundColor:'white'}}>
            <StatusBar style='light'/>
            {/*<Text>{route.params.chatName}</Text>*/}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} keyboardVerticalOffset={90}>
                <>
                    <ScrollView>
                    {/* Chat Goes Here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder='Message' style={styles.textInput} value={input} onChangeText={text => setInput(text)}/>
                        <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={sendMessage}>

                        </TouchableOpacity>
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{},
    footer:{},
    textInput:{},
})
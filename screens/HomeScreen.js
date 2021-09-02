import React, {useEffect, useLayoutEffect, useState} from 'react'
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import CustomListItem from "../components/CustomListItem";
import {Avatar, Button} from "react-native-elements";
import {auth , db} from "../firebase";
import {AntDesign , SimpleLineIcons} from '@expo/vector-icons';
const HomeScreen = ({navigation}) => {

    const [chats , setChats] = useState([]);

    const logout = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data(),
            })))
        ))

        return unsubscribe;
    } ,[])

    useLayoutEffect(() => {
            navigation.setOptions({
                title:'Signal',
                headerStyle: { backgroundColor:'#fff'},
                headerTitleStyle: {color : "#000"},
                headerTintColor: '#000',
                headerLeft: () =>(
                    <View style={{marginLeft:20}}>
                        <TouchableOpacity  hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={logout}>
                            <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        width:80,
                        marginRight:20,
                    }}>
                        <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
                            <AntDesign name='camerao' size={24} color='black'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
                            <SimpleLineIcons name='pencil' size={24} color='black'/>
                        </TouchableOpacity>
                    </View>
                )
            });
        }, []);


    const enterChat = (id , chatName) => {
        navigation.navigate('Chat' , {
            id,
            chatName,
        })
    }

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id , data : {chatName}}) => (
                    <CustomListItem id ={id} chatName={chatName} key={id} enterchat={enterChat}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height:'100%',
    }
})
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem , Avatar} from "react-native-elements";
import {db} from "../firebase";

const CustomListItem = ({id , chatName , enterchat ,}) => {

    const [chatMessages , SetChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages').orderBy('timestamp' , 'desc').onSnapshot((snapshot) => SetChatMessages(snapshot.docs.map(doc => doc.data())))

        return unsubscribe;
    });


    return (
        <ListItem key={id} bottomDivider onPress={() => enterchat(id , chatName)}>
            <Avatar
             rounded
             source={{
                 uri: chatMessages?.[0]?.photoURL ||
                 'https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6',
             }}
            />
            <ListItem.Content>
                <ListItem.Title syles={{fontWeight:800}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
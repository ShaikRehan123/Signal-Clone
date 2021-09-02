import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem , Avatar} from "react-native-elements";

const CustomListItem = ({id , chatName , enterchat ,}) => {
    return (
        <ListItem key={id} bottomDivider onPress={() => enterchat(id , chatName)}>
            <Avatar
             rounded
             source={{
                 uri:
                 'https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6',
             }}
            />
            <ListItem.Content>
                <ListItem.Title syles={{fontWeight:800}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    {/*This is Subtitle*/}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
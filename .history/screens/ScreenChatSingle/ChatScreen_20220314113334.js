import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import MessagesList from '../components/MessagesList';
//import ImagePickerScreen from '../components/ImagePickerScreen';


const ChatScreen = ({navigation}) => {
    return (
      <View style= {styles.container}>
          <ChatHeader/>
          <MessagesList/>
          <ChatInput/>
          {/* <ImagePickerScreen/> */}
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    }
})

export default ChatScreen;
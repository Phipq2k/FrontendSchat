import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  LogBox,
  SafeAreaView,
} from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [emoji, setEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [heightValue, setHeightValue] = useState(new Animated.Value(70));
  const [image, setImage] = useState(null);

  useEffect(() => {
    showEmojis();
  }, [showEmojiPicker]);

  const showEmojis = () => {
    Animated.timing(heightValue, {
      toValue: showEmojiPicker ? 300 : 30,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello Úc Nhỏ!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../../assets/images/ChatSingle/ImgAcc.png"),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // console.log(messages);
  }, []);

  //style send btn
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.btnSend}>
          <Ionicons name="send-sharp" size={25} color="black" />
        </View>
      </Send>
    );
  }

  // chon image de gui
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image:", result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. ",
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.giftedChat}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => {
            onSend(messages), setEmoji("");
          }}
          user={{
            _id: 1,
          }}
          placeholder="Nhập tin nhắn của bạn..."
          renderSend={renderSend}
          text={emoji}
          onInputTextChanged={(text) => setEmoji(text)}
          bottomOffset={33}
        />
      </View>
      <Animated.View style={[{ height: heightValue }, styles.buttonContainer]}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons name="image-outline" size={19} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowEmojiPicker((value) => !value)}
            >
              <Entypo
                name={showEmojiPicker ? "cross" : "emoji-happy"}
                size={18}
                color="#292929"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="attachment" size={18} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="options-outline" size={20} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="mic-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.emojiContainer}>
          <EmojiSelector
            onEmojiSelected={(curentEmoji) => {
              setEmoji(emoji + curentEmoji);
            }}
            showSearchBar={false}
            showTabs={true}
            showHistory={true}
            showSectionTitles={true}
            columns="9"
            category={Categories.all}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  giftedChat: {
    flex: 1,
  },
  btnSend: {
    justifyContent: "center",
    height: "100%",
    marginRight: 10,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    marginLeft: 12,
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    marginRight: 12,
  },
  emojiContainer: {
    width: "100%",
    height: "100%",
  },
});

export default MessagesList;

import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ViewTipsRobot from "./ViewTipsRobot";
import { textSendButton } from "../../service/serviceSpectroBrain";
import AudioRobot from "./AudioRobot";

const { width, height } = Dimensions.get("window");

const TipsRobot = () => {
  const [messageAI, setMessageAI] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // State to track loading status
  const [userInput, setUserInput] = useState('');  // Controlled component state
  const [isEmpty, setIsEmpty] = useState(true); // Validate if the text box is empty or not
  
  const handleSendTextButton = async () => {
    setIsLoading(true);

    try {
      const reponseTextAI = await textSendButton(userInput);
      setMessageAI(reponseTextAI);
      setUserInput('');  // Clear the input field
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);  // Unset the loading status in any case
    }
  }

  return (
    <View style={styles.container}>
      {messageAI ? <ViewTipsRobot message={messageAI} /> : <ViewTipsRobot />}
      <View style={styles.iconMessage}>
        <Entypo name="triangle-down" size={height * 0.071} color="white" />
      </View>
      <View style={styles.viewGiftLogo}>
        <Image
          style={styles.imageGifRobot}
          source={require("../../../assets/images/MASCOT.gif")}
        />
      </View>
      <View style={styles.inputTextInteractionContainer}>
        <TextInput 
          style={styles.inputTextInteraction}
          placeholderTextColor={"#969696"}
          placeholder="What question do you have?"
          value={userInput}  // Controlled component
          onChangeText={text => setUserInput(text)}
          onKeyPress={() => userInput.length <= 0 ? setIsEmpty(true): setIsEmpty(false)}
        />
        <View>
          <AudioRobot onPress={isEmpty} handleSendText={handleSendTextButton}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  viewGiftLogo: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "11%",
    width: "100%",
    height: "20%",
    marginTop: "3%",
  },
  iconMessage: {
    width: width,
    height: "4.9%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: "42%",
    marginTop: -(height * 0.0227),
    zIndex: 1,
  },

  imageGifRobot: {
    width: "38%",
    height: "99%",
  },
  inputTextInteraction: {
    color: "#FFF",
    paddingLeft: width * 0.0416,
    width: "70%",
    height: "59%",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: width * 0.0694,
    fontSize: height * 0.017,
    marginLeft:"3%"
  },
  inputTextInteractionContainer: {
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "12%",
    justifyContent:"center",
    marginTop:"20%",
  },
  buttonInteract: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "30%",
    borderRadius: width * 0.111,
    marginLeft: "5%",
    marginBottom:"5%",
  },
  textbutton: {
    color: "#fff",
    fontSize: height * 0.0184,
    fontWeight: "bold",
  },
});
export default TipsRobot;
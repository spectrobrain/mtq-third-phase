import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { ReactNode } from "react";
import * as Amigatable from "react-native-animatable";
import { Entypo, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

type messageRobotPropsType = {
  children: ReactNode;
  IconCaretChevronHandle: () => void;
};
const MessageRobot = ({
  children,
  IconCaretChevronHandle,
}: messageRobotPropsType) => {
  const {
    containerIcon,
    containerGift,
    giftRobot,
    container,
    containerGiftCaret
  } = styles;

  return (
    <View style={container}>
      {children}
      <Pressable style={containerIcon}>
        <AntDesign name="caretdown" size={height * 0.093} color="white" />
      </Pressable>
      <View style={containerGiftCaret}>
      <View style={containerGift}>
        <Amigatable.Image
          animation="zoomIn"
          iterationCount={1}
          direction="normal"
          duration={500}
          source={require("../../../assets/images/MASCOT.gif")}
          style={giftRobot}
        />
        <Pressable
          onPress={() => IconCaretChevronHandle()}
        >
          <Entypo name="chevron-right" size={60} color="white" />
        </Pressable>
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
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  containerIcon: {
    width: width,
    displey: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -(height * 0.0411),
    zIndex: 1,
    height: height * 0.089,
   
  },
  containerGift: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:'17%',
    width: "60%",
    height: "100%",
    
   
  },
  containerGiftCaret: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "34%",
    width: "100%",
    height: "15%",
  },
  giftRobot: {
    width: "40%",
    height: "80%",
    resizeMode: "contain",
    // marginVertical: height * 0.0568,
  },
  iconMesaggeCaret: {
    flexDirection: "row",
    width: width,
    height: height * 0.0923,
  },
});

export default MessageRobot;

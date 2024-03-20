import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import { voiceSendButton } from "../../service/serviceSpectroBrain";

const { width, height } = Dimensions.get("window");

type typeAudioButtonProps = {
  onPress : boolean;
  handleSendText: () => void;
}

const AudioRobot = ({onPress, handleSendText} : typeAudioButtonProps) => {
  const [recording, setRecording] = React.useState<Audio.Recording | undefined>();
  const [isRecording,setIsRecording] = React.useState(false);
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const {buttonInteractVoice} = styles;
  const [isFocused, setIsfocused] = React.useState(false);
  
  async function playAudio(path: string) {
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: `http://192.168.12.203:4000${path}` }, // Adjust this URI accordingly
      { shouldPlay: true }
    );
    setSound(newSound);
    await newSound.playAsync();
  }

  async function startRecording() {
    
    setIsRecording(!isRecording);
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(newRecording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setIsRecording(!isRecording)
    if (recording) {
      console.log('Stopping recording..');
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording.getURI();
      const audioResponse = await voiceSendButton(uri);
      console.log(audioResponse);
      console.log('Recording stopped and stored at', uri);

      if (audioResponse?.audioResponsePath) {
        await playAudio(audioResponse.audioResponsePath); // Play the received audio
      }

      setRecording(undefined);  // Reset the state after stopping
    }
  }
  React.useEffect(() => {
    return () => {
      // Cleanup function for sound instance
      sound?.unloadAsync();
    };
  }, [sound]);

  return (
    <Pressable style={{...buttonInteractVoice, backgroundColor: isRecording ? 'red' : '#3ed9f4' }}
    onPressIn={onPress ? startRecording : handleSendText}      
    onPressOut={stopRecording}
    >
      <Ionicons style={styles.iconMicrophone} name={ onPress ?  "mic-outline" : "paper-plane-outline"}
        size={30} color="#fff" />
    </Pressable>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  buttonInteractVoice: {
    backgroundColor: "#3ed9f4",
    alignItems: "center",
    justifyContent: "center",
    width: "59%",
    height: "59%",
    borderRadius: 50,
    marginLeft: "15%"
  },
  textbuttonVoice: {
    color: "#fff",
    fontSize: height * 0.0184,
    fontWeight: "bold",
  },
  iconMicrophone: {
    height: height * 0.0426,
  },
});

export default AudioRobot; 

import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { hightHorizontalScale, hightVerticalScale, verticalScale } from '../../utils/metrics'
import { useChatContext } from '../../contexts'
import { useKeyboardHeight } from '../../hooks/useKeyboardHeight'
import { colors } from '../../designSystem/definitions'

export function ChatForm() {
  const { sendMessage } = useChatContext()
  const [message, setMessage] = useState('')
  const [keyboardHeight] = useKeyboardHeight()
  const [marginBottom, setMarginBottom] = useState(0)
  const [inputHeight, setInputHeight] = useState(40)

  const keyboardHandler = (action: 'open' | 'close') => {
    if (Platform.OS === 'ios') {
      setMarginBottom(action === 'open' ? keyboardHeight : 0)
    }
  }

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setInputHeight(Math.max(40, contentHeight)) // Altura mínima de 40
  }

  const sendMessageHandler = () => {
    if (!message) return
    setMessage('')
    sendMessage({
      message,
      type: 'TEXT',
    })
  }

  return (
    <View style={[styles.container /* { marginBottom }*/]}>
      {/* <SafeAreaView style={styles.safeArea}> */}
      <TextInput
        style={[
          styles.input,
          { height: hightVerticalScale(inputHeight), width: hightHorizontalScale(300) },
        ]}
        onChangeText={(text) => setMessage(text)}
        value={message}
        multiline
        onBlur={() => keyboardHandler('close')}
        onFocus={() => keyboardHandler('open')}
        onSubmitEditing={sendMessageHandler}
        onContentSizeChange={(e) =>
          handleContentSizeChange(
            e.nativeEvent.contentSize.width,
            e.nativeEvent.contentSize.height
          )
        }
        placeholder="Message"
        placeholderTextColor={'rgba(255,255,255,0.3)'}
      />
      <Pressable android_ripple={{ color: '#fff' }} />
      <Pressable onPress={sendMessageHandler}>
        <Ionicons name={'paper-plane-outline'} size={32} color={colors.white} />
      </Pressable>
      {/* </SafeAreaView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: hightVerticalScale(80),
    padding: 16,
    backgroundColor: colors.primary.base,
    borderTopWidth: 1,
    borderTopColor: colors.blueBorder,
  },
  input: {
    height: 40,
    borderWidth: 0,
    width: '85%',
    borderBottomColor: colors.gray[200],
    borderBottomWidth: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.gray[50],
  },
  safeArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

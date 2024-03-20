import React, { useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useChatContext } from '../../contexts/ChatProvider'
import { ChatMessage } from './ChatMessage'
import { colors } from '../../designSystem/definitions'

export function ListOfMessages() {
  const { messages } = useChatContext()
  const scrollViewRef = useRef<null | ScrollView>(null)

  if (!messages) return null

  return (
    <ScrollView
      style={styles.container}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef.current?.scrollToEnd({ animated: true })
      }}
    >
      <View style={{ padding: 16 }}>
        {messages.map((messageData) => (
          <ChatMessage {...messageData} key={messageData._id} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:colors.primary.base,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useChatsContext } from '../../contexts'
import { Header } from '../../designSystem/components'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import { hightHorizontalScale, hightVerticalScale, moderateScale, verticalScale } from '../../utils/metrics'

export function ListOfChats () {
  const navigation = useNavigation()
  const chats = useChatsContext()

  if (chats.loading) return <Text style={{ color: '#FFF' }}>Loading</Text>

  if (chats.error) return <Text style={{ color: '#FFF' }}>Error</Text>

  if (!chats.value) return null

  return (
    <View>
      <Header title='Chats' />
      <ScrollView style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
        {chats.value.map(chatInfo => (
          <TouchableOpacity
            key={chatInfo._id}
            style={styles.chatItem}
            onPress={() => navigation.navigate('ChatScreen', { chatInfo })}
          >
            <View style={styles.containerRobot}>
            <Image
              source={
                chatInfo.image ?? require('../../../assets/images/MASCOT.gif')
              }
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
              }}
            />
            </View>
            <Text style={[text.semibold, text.md, styles.text]}>
              {chatInfo.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  contentContainer:{
    display:'flex',
    height:hightVerticalScale(80),
    marginTop:verticalScale(12),
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: colors.primary.base,
    height: '100%',
  },
  text: {
    color: colors.gray[50],
  },
  chatItem: {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingRight: verticalScale(70),
    width:hightHorizontalScale(330),
    height:hightVerticalScale(80),
    backgroundColor:colors.blue_Rgba_025,
    borderWidth: 1,
    borderColor: colors.gray[500],
    borderBottomLeftRadius:moderateScale(50),
    borderTopLeftRadius:moderateScale(50),
    borderTopRightRadius:moderateScale(10),
    borderBottomRightRadius:moderateScale(10)
  },
  containerRobot: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hightHorizontalScale(6),
    width:65,
    height:65,
    borderWidth:1,
    borderColor:colors.gray[700],
    borderRadius:100,
    backgroundColor:colors.blueBackground
  }
})

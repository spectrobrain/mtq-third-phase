import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { FC, useState } from 'react'
import { SearchType } from '../../typings'
import { Entypo } from '@expo/vector-icons'
import { ToggleStorageSearch } from './ToggleStorageSearch'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import { hightHorizontalScale, moderateScale } from '../../utils/metrics'

interface QAndAContainerProps {
  startOpen?: boolean
  search: SearchType | null
}

export const QAndAContainer: FC<QAndAContainerProps> = ({
  startOpen = false,
  search,
}) => {
  const [open, setOpen] = useState(startOpen)

  if (!search) return null

  const { answer, question } = search

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setOpen((curr) => !curr)}>
        <View style={styles.actionContainer}>
          <Text style={[text.sm, text.semibold, styles.text]}>{question}</Text>
          <Entypo
            name={open ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={colors.gray[50]}
          />
        </View>
      </Pressable>
      {open && (
        <View style={styles.answerContainer}>
          <Text style={[text.sm, styles.text]}>{answer}</Text>
          <ToggleStorageSearch {...search} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: colors.blueBorder,
    backgroundColor: colors.blue_bg_chatMessage,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(8),
    borderWidth: 1,
    padding: 8,
    alignItems: 'center',
    backgroundColor: colors.blue_Rgba_035,
  },
  answerContainer: {
    width: hightHorizontalScale(330),
    height: 'auto',
    padding: 16,
    paddingTop: 0,
  },
  text: {
    color: colors.gray[50],
  },
  button: {
    padding: 2,
  },
})

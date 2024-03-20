import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale
} from '../../utils/metrics'
import { useSearcherContext } from '../../contexts'
import { colors } from '../../designSystem/definitions'
import { input } from '../../designSystem/styles'

export const SearcherBar = () => {
  const { search, searchingState } = useSearcherContext()
  const [question, setQuestion] = useState('')
  const [inputHeight, setInputHeight] = useState(40); 
  const searchHandler = () => {
    if (!question) return
    search(question)
  }

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setInputHeight(Math.max(40, contentHeight)); // Altura mínima de 40
  };

  useEffect(() => {
    if (searchingState === 'updated') {
      Keyboard.dismiss()
      setQuestion('')
    }
  }, [searchingState])

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={[input.styles,{ height: inputHeight, width:hightHorizontalScale(280) }]}
        multiline
        onChangeText={text => setQuestion(text)}
        value={question}
        onSubmitEditing={searchHandler}
        editable={searchingState !== 'loading'}
        onContentSizeChange={(e) =>
          handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
        }
      />
      <Pressable onPress={searchHandler}>
        {searchingState !== 'loading' ? (
          <Feather name={'search'} size={32} color={colors.gray[50]} />
        ) : (
          <ActivityIndicator color={colors.gray[50]} />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    width: horizontalScale(360),
    justifyContent: 'center',
    alignItems: 'center',
    padding: hightHorizontalScale(16),
    gap: horizontalScale(8),
    marginTop:verticalScale(6),
    borderWidth:1,
    backgroundColor: colors.primary.base,
    borderBottomColor:colors.blueBorder,
    borderTopColor:colors.blueBorder
  },
})

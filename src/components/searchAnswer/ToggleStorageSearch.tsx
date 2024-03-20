import { FontAwesome } from '@expo/vector-icons'
import React, { FC, useMemo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useSearcherContext } from '../../contexts'
import { SearchType } from '../../typings'
import { View } from 'react-native-animatable'
import { colors } from '../../designSystem/definitions'
import { lowHorizontalScale, lowVerticalScale, moderateScale } from '../../utils/metrics';

export const ToggleStorageSearch: FC<SearchType> = search => {
  const { saveSearch, removeSearch, savedSearches } = useSearcherContext()
  const searchIsSaved = useMemo(
    () => !!savedSearches.find(({ id }) => search.id === id),
    [savedSearches]
  )

  const onPressHandler = () => {
    if (searchIsSaved) {
      removeSearch(search.id)
      return
    }

    saveSearch(search)
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <Pressable onPress={onPressHandler} style= {styles.containerIcon}>
        <FontAwesome
          name={searchIsSaved ? 'remove' : 'save'}
          size={moderateScale(24)}
          color={colors.white}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  containerIcon :{
    display:'flex',
    paddingTop: moderateScale(8),
    alignItems: 'flex-end',
    justifyContent: 'center',
    width:'100%',
    height: moderateScale(35),
  }
})

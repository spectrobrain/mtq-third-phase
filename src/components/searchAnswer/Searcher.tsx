import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
  hightHorizontalScale
} from '../../utils/metrics'
import { useSearcherContext } from '../../contexts'
import { QAndAList } from './QAndAList'
import { SearcherBar } from './SearcherBar'

export const Searcher: FC = () => {
  const { currentTab, currentSearches } = useSearcherContext()

  if (currentTab === 'saved') return null

  return (
    <View style={styles.searchContainer}>
      <SearcherBar />
      <QAndAList searches={currentSearches} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    width:hightHorizontalScale(360),
    height: '100%',
    // backgroundColor:'gray',
  },
})

import React, { Fragment } from 'react'
import { Text, View } from 'react-native'
import { useSearcherContext } from '../../contexts'
import { QAndAList } from './QAndAList'
import { colors } from '../../designSystem/definitions'

export const SavedQuestions = () => {
  const { savedSearches } = useSearcherContext()

  if (savedSearches.length === 0) return <Text style={{ color: 'white'}}>Without saved questions</Text>
  return (
    <View style={{ backgroundColor: colors.primary.base}}>
      <QAndAList searches={savedSearches} />
    </View>
  )
}

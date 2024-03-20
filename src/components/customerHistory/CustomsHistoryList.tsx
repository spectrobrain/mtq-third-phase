import React from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useCustomersHistoryContext } from '../../contexts'
import { CustomerCard } from './CustomerCard'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'

export const CustomsHistoryList = () => {
  const { currentCustomersHistory, state } = useCustomersHistoryContext()

  if (state === 'loading')
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.primary.base} />
        <Text style={[text.lg]}>Loading customer information</Text>
      </View>
    )
  return (
    <ScrollView
      style={styles.containerListHistory}
      contentContainerStyle={styles.contentContainer}
    >
      {currentCustomersHistory.map((customerData, index) => (
        <CustomerCard
          idItem={index}
          key={`${customerData.altname}-${customerData.last_transaction_date}`}
          {...customerData}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loader: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    padding: 8,
  },
  containerListHistory: {
    backgroundColor: colors.primary.base,
    paddingTop: 8,
  },
  contentContainer: {
    rowGap: 10,
  },
})

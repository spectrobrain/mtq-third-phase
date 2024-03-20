import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../designSystem/components'

export const CustomersHistoryHeader = () => {
  return <Header title="Inactive customers (60+ days)" style={styles.header} />
}

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 120 : 100,
  },
})

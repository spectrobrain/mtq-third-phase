import React from 'react'
import { useSearcherContext } from '../../contexts'
import { Tabs } from '../../designSystem/components'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../designSystem/definitions'
import { hightHorizontalScale } from '../../utils/metrics'

export const ActionButtons = () => {
  const { setCurrentTab, currentTab } = useSearcherContext()

  return (
    <View style={styles.container}>
      <Tabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabs={[
          {
            tabName: 'new',
            tabLabel: 'New question',
          },
          {
            tabName: 'saved',
            tabLabel: 'Saved questions',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: hightHorizontalScale(360),
    marginTop: 0,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
})

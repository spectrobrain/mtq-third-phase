import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import React, { FC } from 'react'
import { QAndAContainer } from './QAndAContainer'
import { SearchType } from '../../typings'

const { width, height } = Dimensions.get('window')

type QAndAListProps = {
  searches: SearchType[]
}

export const QAndAList: FC<QAndAListProps> = ({ searches }) => {
  return (
    <ScrollView
      overScrollMode="always"
      style={styles.contentContainer}
      scrollEnabled={true}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.container}>
        {searches.map((search, index) => (
          <QAndAContainer
            key={search.id}
            startOpen={index === 0}
            search={search}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    padding: 16,
    gap: 16,
  },
  contentContainer: {
    display: 'flex',
    borderRadius: width * 0.0233,
    marginBottom: 160,
    width: '100%',
    //height:'60%',
  },
})

import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { generatorKey } from '../../utils/helper'
import SliderHorizontalMonths from './SliderHorizontalMonths'

const { width, height } = Dimensions.get('window')

const ChartViewMonth = () => {
  const { summaryDataFormat } = useGraphMonts() ?? {};
 
  return (
    <View style={styles.chartView}>
      <View style={styles.chartViewMonths}>
        {summaryDataFormat?.map((item, index) => (
          <SliderHorizontalMonths
            key={`${index + 1}-${generatorKey}`}
            month={item.month}
            sales={item.sales}
            quota={item.quota}
            prom={item.prom}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '92%',
    height: '45%',
    borderRadius: width * 0.027,
    marginTop: '3%',
    backgroundColor: '#fff',
  },
  chartViewMonths: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '92%',
    height: '94%',
    borderRadius: width * 0.027,
    marginTop: '5%',
  },
  sliderView: {
    flexDirection: 'column',
    width: '90%',
    height: '50%',
    borderRadius: width * 0.055,
    backgroundColor: '#036481',
  },
  textMonthChart: {
    fontSize: height * 0.017,
  },
  shadowSliderView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15,
  },
})

export default ChartViewMonth

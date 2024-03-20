import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useQuotaContext } from '../../contexts'
import {
  hightHorizontalScale,
  hightVerticalScale,
  moderateScale,
  verticalScale
} from '../../utils/metrics'
import CircleProgress from './CircleProgress'
import DateText from './DateText'
import NavChartCircle from './NavChartCircle'
import TextDataRow from './TextDataRow'

export type ChartDataType = 'daily' | 'weekly' | 'monthly' | 'yearly'

const { width, height } = Dimensions.get('window')

const ProgressChartCircle = () => {
  const { daily, monthly, weekly, yearly } = useQuotaContext() ?? {}
  const [dataType, setDataType] = useState<ChartDataType>('daily')
  const [isTouch, setIsTouch] = useState(false)

  const dataChart =
    (dataType === 'daily' && daily) ||
    (dataType === 'monthly' && monthly) ||
    (dataType === 'weekly' && weekly) ||
    (dataType === 'yearly' && yearly)

  const { data } = dataChart ?? {}

  const salesTotal: number = Math.round(data?.sales)
  const quotaTotal: number = Math.round(data?.quota)
  const quotaFulfillment = parseFloat(
    ((salesTotal / quotaTotal) * 100).toFixed(1)
  )
  const handleProgressType = (progressType) => {
    setDataType(progressType)
    setIsTouch(!isTouch)
  }
  const quotaFulfillmentFormat: number =
    quotaFulfillment === null || Number.isNaN(quotaFulfillment)
      ? 0
      : quotaFulfillment

  const quotaFulfillmentTotal =
    quotaFulfillmentFormat > 100 ? 100 : quotaFulfillmentFormat

  return (
    <View style={styles.chartViewProgressCircle}>
      <View style={styles.navCircleProgress}>
        <NavChartCircle
          title={'daily'}
          handleProgress={() => handleProgressType('daily')}
          isTouch={isTouch}
          dataType={dataType}
        />
        <NavChartCircle
          title={'weekly'}
          handleProgress={() => handleProgressType('weekly')}
          isTouch={isTouch}
          dataType={dataType}
        />
        <NavChartCircle
          title={'monthly'}
          handleProgress={() => handleProgressType('monthly')}
          isTouch={isTouch}
          dataType={dataType}
        />
        <NavChartCircle
          title={'yearly'}
          handleProgress={() => handleProgressType('yearly')}
          isTouch={isTouch}
          dataType={dataType}
        />
      </View>
      <DateText typeDate1={dataType} />
      <View style={styles.chartViewPercentage}>
        <CircleProgress
          size={hightVerticalScale(240)}
          progressPercent={quotaFulfillmentTotal}
          bgColor={'#fff'}
          pgColor={'#51e7fb'}
          strokeWidth={moderateScale(25)}
        />
      </View>
      <View style={styles.containerItemsData}>
        <TextDataRow title="Quota" value={quotaTotal} />
        <TextDataRow title="Sales" value={salesTotal} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartViewProgressCircle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: hightHorizontalScale(310),
    height: hightVerticalScale(450),
    borderRadius: moderateScale(8),
    marginTop: verticalScale(10),
    padding: moderateScale(4),
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  navCircleProgress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: hightVerticalScale(35),
    width: hightHorizontalScale(300),
  },

  chartViewProgress: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: hightHorizontalScale(320),
    height: hightVerticalScale(320),
    borderRadius: moderateScale(8),
    marginTop: hightVerticalScale(5),
    backgroundColor: '#fff',
  },
  chartViewPercentage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: hightHorizontalScale(245),
    height: hightVerticalScale(245),
  },
  textPercentage: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  containerTextData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: hightHorizontalScale(20),
    height: hightVerticalScale(40),
    borderRadius: moderateScale(8),
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textData: {
    fontSize: height * 0.017,
    color: '#fff',
  },
  containerItemsData: {
    gap: height * 0.011,
    paddingTop: '5%',
  },
})
export default ProgressChartCircle

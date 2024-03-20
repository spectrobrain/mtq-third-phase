import React, { useEffect } from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { QuotaProvider, useQuotaContext, useModalContext } from '../contexts'
import { StyleSheet, View, Dimensions } from 'react-native'

import {
  BackGroundTemplate,
  BannerCharts,
  ChartViewVertival,
  Loader,
  ProgressChartCircle
} from '../components'
import ModalTutorial from '../components/modal/ModalTutorial'
import { ScreenError } from './ScreenError'


interface Props extends NativeStackScreenProps<any, any> {}

const { width, height } = Dimensions.get('window')

export const ScreenNewChart = (props: Props) => {
  const { loading, dataQuotas } = useQuotaContext() ?? {}
  const { modal, handleOpenModal } = useModalContext() ?? {}
  const isTablet = width >= 768
  const { navigation, route } = props
  
  if(dataQuotas[0]?.resultMsg) return <ScreenError messageError={dataQuotas[0]?.resultMsg} navigation={navigation} route={route} />
  
  const uservalidate = true
  useEffect(() => {
    if (uservalidate) {
      handleOpenModal('ScreenCharts')
    }
  }, [])
  
  return (
    <QuotaProvider>
      {modal !== 'close' ? (
        <ModalTutorial
          isVisible={true}
          requestClose={() => handleCloseModal()}
        />
      ) : null}
      <BackGroundTemplate aling="center">
        <BannerCharts iconName="log-out-outline" navigateTo="ScreenLogin" />
        {loading ? (
          <Loader />
        ) : (
          <View
            style={{
              ...styles.containerChart,
              marginTop: isTablet ? 60 : null,
            }}
          >
            <ProgressChartCircle/>
            <ChartViewVertival />
          </View>
        )}
      </BackGroundTemplate>
    </QuotaProvider>
  )
}

const styles = StyleSheet.create({
  containerChart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ScreenNewChart

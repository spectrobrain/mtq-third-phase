import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import { hightHorizontalScale, hightVerticalScale, horizontalScale,moderateScale,verticalScale} from '../../utils/metrics'
import { ICustomer } from '../../typings'
import { Actions } from './Actions'

export const CustomerCard: FC<ICustomer> = ({
  companyname,
  altname,
  last_transaction_date,
  phone,
  email,
  idItem,
}) => {
  const normalizePhone = phone?.replace(/[^0-9]/gi, '') ?? ''
  const typeBgColor = idItem % 2 === 0

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: typeBgColor
          ? colors.blue_Rgba_010
          : colors.blue_Rgba_025,
      }}
    >
      <View style={styles.infoContainer}>
        <Text
          style={[styles.text, text.xs, styles.companyName]}
          numberOfLines={1}
        >
          {companyname ?? altname}
        </Text>
        <View style={styles.containerDate}>
          <Text style={[styles.text, text.xxs]}>Last Sale </Text>
          <Text style={[styles.dateText, text.xxs]}>
            {last_transaction_date}
          </Text>
        </View>
      </View>
      <Actions email={email} phone={normalizePhone} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: horizontalScale(360),
    justifyContent: 'space-evenly',
    padding: 8,
    borderTopColor: colors.blueBorder,
    borderBottomColor: colors.blueBorder,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  infoContainer: {
    display:'flex',
    width:horizontalScale(180),
    rowGap:4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    color: colors.gray[50],
  },
  dateText: {
    width:hightHorizontalScale(100),
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:4,
    borderColor:colors.blueBorder,
    borderWidth: 1,
    color: colors.gray[50],
  },
  companyName: {
    paddingLeft:8,
    width: '100%',
  },
  containerDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
  },
})

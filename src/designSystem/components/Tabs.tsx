import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'
import { tab } from '../definitions'

const getCurrentStyle = (itIsCurrent: boolean) => {
  if (itIsCurrent) {
    return {
      button: tabs.activeTab,
      text: tabs.activeText,
    }
  }

  return {
    button: tabs.deactiveTab,
    text: tabs.deactiveText,
  }
}

type TabType = {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined
  tabName?: string
  tabLabel?: string
}

interface TabProps extends TabType {
  setCurrentTab: (value: React.SetStateAction<any>) => void
  currentTab: string
}

type TabsProps = {
  tabs: TabType[]
  setCurrentTab: (value: React.SetStateAction<any>) => void
  currentTab: string
}

const Tab: FC<TabProps> = ({
  currentTab,
  tabLabel,
  tabName,
  onPress,
  setCurrentTab,
}) => {
  const tabStyles = getCurrentStyle(currentTab === tabName)

  return (
    <Pressable
      style={tabStyles.button}
      onPress={(event) => {
        onPress?.(event)
        setCurrentTab(tabName)
      }}
    >
      <Text style={tabStyles.text}>{tabLabel ?? tabName}</Text>
    </Pressable>
  )
}

export const Tabs: FC<TabsProps> = ({ currentTab, setCurrentTab, tabs }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {tabs.map(({ tabName, onPress, tabLabel }, index) => (
        <Tab
          key={`${index}-${tabName}`}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabName={tabName}
          onPress={onPress}
          tabLabel={tabLabel}
        />
      ))}
    </View>
  )
}

const tabs = StyleSheet.create({
  activeTab: {
    backgroundColor: tab.background.active,
    padding: horizontalScale(8),
    borderWidth: tab.borderWidth.active,
    borderRadius: tab.borderRadius.active,
    width: tab.width.active,
    height: tab.height.active,
  },
  deactiveTab: {
    backgroundColor: tab.background.deactive,
    padding: horizontalScale(8),
    borderColor: tab.borderColor.deactive,
    borderWidth: tab.borderWidth.deactive,
    borderRadius: tab.borderRadius.deactive,
    width: tab.width.active,
    height: tab.height.deactive,
  },
  activeText: {
    color: tab.fontColor.active,
    textAlign: 'center',
    fontSize: moderateScale(12),
    height: moderateScale(25),
  },
  deactiveText: {
    color: tab.fontColor.deactive,
    textAlign: 'center',
    fontSize: moderateScale(12),
    height: moderateScale(25),
  },
})

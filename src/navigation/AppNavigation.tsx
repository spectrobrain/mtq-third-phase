import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useUserDataContext } from '../contexts'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../designSystem/definitions'
import {
  ChatsScreen,
  ScreenMessage,
  SearchAnswerScreen,
  ScreenNewChart,
  CustomersHistoryScreen,
} from '../screens'

const Tab = createBottomTabNavigator()

const screensConfig = {
  ChatsScreen: {
    iconNameFocus: 'chatbubble-ellipses',
    iconName: 'chatbubble-ellipses-outline',
  },
  ScreenNewChart: {
    iconNameFocus: 'stats-chart',
    iconName: 'stats-chart-outline',
  },
  ScreenMedalls: {
    iconNameFocus: 'ios-medal',
    iconName: 'ios-medal-outline',
  },
  SearchAnswerScreen: {
    iconNameFocus: 'md-search-sharp',
    iconName: 'md-search-sharp',
  },
  CustomersHistoryScreen: {
    iconNameFocus: 'timer',
    iconName: 'timer-outline',
  },
}

const styleButton = {
  borderWidth: 1,
            borderColor: colors.blue_Rgba_010,
            shadowColor:'white',
            shadowOffset: {
              width: 2,
              height: 1,
            },
            shadowOpacity:0.5,
            shadowRadius: 20,
            elevation:1,
}
export default function AppNavigation() {
  const { user } = useUserDataContext()

  if (user.data?.showTutorial) return <ScreenMessage />

  return (
    <Tab.Navigator
      initialRouteName="ChatsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons
            name={
              screensConfig[route.name][focused ? 'iconNameFocus' : 'iconName']
            }
            color={color}
            size={size}
          />
        ),
        tabBarStyle: {
          backgroundColor: colors.primary.base,
          borderTopColor: colors.primary.base,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[50],
        tabBarInactiveTintColor: colors.gray[50],
        tabBarActiveBackgroundColor: colors.blue_Rgba_035,
      })}
    >
      <Tab.Screen
        name="ChatsScreen"
        options={{
          headerShown: false,
          title: 'Chats',
          tabBarItemStyle: {...styleButton,borderTopLeftRadius: 10},
          
        }}
        component={ChatsScreen}
      />
      <Tab.Screen
        name="ScreenNewChart"
        options={{
          headerShown: false,
          title: 'Stats',
          tabBarItemStyle: styleButton,
        }}
        component={ScreenNewChart}
      />
      {/*<Tab.Screen
        name='ScreenMedalls'
        options={{ headerShown: false, title: 'Medals' }}
        component={ScreenMedalls}
    />*/}
      <Tab.Screen
        name="SearchAnswerScreen"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarItemStyle: styleButton,
        }}
        component={SearchAnswerScreen}
      />
      <Tab.Screen
        name="CustomersHistoryScreen"
        options={{
          headerShown: false,
          title: 'History',
          //tabBarItemStyle: {  },
          tabBarItemStyle: {...styleButton,borderTopRightRadius: 10},
        }}
        component={CustomersHistoryScreen}
      />
    </Tab.Navigator>
  )
}


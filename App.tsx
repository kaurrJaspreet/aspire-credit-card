/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Image, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {DebitCard, WeeklyLimit} from './src/screens';
import images from './src/constants/images';
import styles from './AppStyles';
import {colorPrimery, inactiveTab, white, black} from './src/constants/colors';

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};
const App = () => {
  useEffect(() => {
    enableScreens(false);
  }, []);
  const Tab = createBottomTabNavigator();
  const MainStack = createStackNavigator();

  function MyTabBar() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: styles.dropShadow,
        }}>
        <Tab.Screen
          name="WeeklyLimit"
          component={WeeklyLimit}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.tabIcon}
                source={focused ? images.ic_fillHome : images.ic_home}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    fontFamily: focused
                      ? 'AvenirNextLTPro-Regular'
                      : 'AvenirNextLTPro-Bold',
                    color: focused ? colorPrimery : inactiveTab,
                  },
                ]}>
                Home
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Debit Card"
          component={DebitCard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.tabIcon}
                source={focused ? images.ic_fillClasses : images.ic_classes}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    fontFamily: focused
                      ? 'AvenirNextLTPro-Regular'
                      : 'AvenirNextLTPro-Bold',
                    color: focused ? colorPrimery : inactiveTab,
                  },
                ]}>
                Debit Card
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="DebitCard"
          component={DebitCard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.tabIcon}
                source={focused ? images.ic_assets : images.ic_assets}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    fontFamily: focused
                      ? 'AvenirNextLTPro-Regular'
                      : 'AvenirNextLTPro-Bold',
                    color: focused ? colorPrimery : inactiveTab,
                  },
                ]}>
                Assets
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Tests"
          component={DebitCard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.tabIcon}
                source={focused ? images.ic_fillTests : images.ic_tests}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    fontFamily: focused
                      ? 'AvenirNextLTPro-Regular'
                      : 'AvenirNextLTPro-Bold',
                    color: focused ? colorPrimery : inactiveTab,
                  },
                ]}>
                Credit
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Tracker"
          component={DebitCard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.tabIcon}
                source={focused ? images.ic_user : images.ic_user}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    fontFamily: focused
                      ? 'AvenirNextLTPro-Regular'
                      : 'AvenirNextLTPro-Bold',
                    color: focused ? colorPrimery : inactiveTab,
                  },
                ]}>
                Profile
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={TransitionScreenOptions}>
        <MainStack.Screen
          name="Tab"
          component={MyTabBar}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

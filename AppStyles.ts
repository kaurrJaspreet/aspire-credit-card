import {StyleSheet, Platform} from 'react-native';
import normalize from './src/constants/normlize';
import {
  colorPrimery,
  inactiveTab,
  white,
  black,
  grey_dark,
} from './src/constants/colors';
const styles = StyleSheet.create({
  tabIcon: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: 'contain',
  },
  dropShadow: {
    backgroundColor: white,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: Platform.OS == 'android' ? 12 : 3,
  },
  label: {
    fontSize: normalize(11),
    fontFamily: 'Poppins-Medium',
  },
  topTabLabel: {
    fontSize: normalize(15),
    textTransform: 'none',
    fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins-Regular',
    fontWeight: '600',
  },
  topTabInactiveLabel: {
    fontSize: normalize(15),
    textTransform: 'none',
    fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins-Regular',
    fontWeight: 'normal',
  },
  tabIndicator: {
    width: normalize(80),
    height: Platform.OS == 'android' ? normalize(5) : normalize(3),
    left: '15%',
    backgroundColor: colorPrimery,
  },
  headerTitle: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-SemiBold',
    color: grey_dark,
    fontWeight: '600',
  },

  header: {
    backgroundColor: white,
    elevation: 0,
    shadowOpacity: 0,
  },
  userProfile: {
    width: normalize(35),
    height: normalize(35),
  },
  headerLeft: {
    marginLeft: normalize(20),
  },
  searchIcon: {
    width: normalize(25),
    height: normalize(25),
  },
  headerRight: {
    marginRight: normalize(20),
  },
});

export default styles;

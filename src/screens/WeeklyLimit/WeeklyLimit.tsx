import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View, Image, Switch} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import {HOST, SINGLE_USER} from '../../constants/API';
const WeeklyLimit = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);
  const fetchUser = async () => {
    fetch(HOST + SINGLE_USER)
      .then(response => response.json())
      .then(async json => {
        await setUserData(json.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#0C365A"
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={styles.container}>
        <View style={styles.topPart}>
          <View style={styles.headerTop}>
            <Image source={images.back} style={styles.iconHeader} />
            <Image source={images.ic_fillHome} style={styles.iconHeader} />
          </View>
          <Text style={styles.HeaderText}>Spending Limit</Text>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.limitTab}>
            <Image source={images.limit} style={styles.limitIcon} />
            <Text style={styles.limitText}>
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View style={styles.abIconView}>
            <Text style={styles.dollarText}>S$</Text>
          </View>
          <Text style={styles.limitTextDesc}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <View style={styles.buttonsView}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>S$ 5,000</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttontext}>S$ 10,000</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttontext}>S$ 20,000</Text>
            </View>
          </View>
          <View style={[styles.saveButton, styles.shadowProp]}>
            <Text style={styles.saveButtonText}>Save</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default WeeklyLimit;

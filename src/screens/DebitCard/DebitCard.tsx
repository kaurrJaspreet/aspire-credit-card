import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View, Image, Switch} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import {HOST, SINGLE_USER} from '../../constants/API';
const DebitCard = () => {
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
            <Text style={styles.HeaderText}>Debit Card</Text>
            <Image source={images.ic_fillHome} style={styles.iconHeader} />
          </View>
          <Text style={styles.abText}>Available balance</Text>
          <View style={styles.abView}>
            <View style={styles.abIconView}>
              <Text style={styles.dollarText}>S$</Text>
            </View>
            <Text style={[styles.HeaderText, styles.flexstart]}>3,000</Text>
          </View>
          <View style={styles.hideCardNumberView}>
            <Image source={images.ic_hide_show} style={styles.hs_icon} />
            <Text style={styles.hsText}>Hide card number</Text>
          </View>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.cardView}>
            <Image source={images.aspirelogo} style={styles.aspireLogo} />
            <Text style={styles.nameText}>
              {userData ? userData?.first_name + ' ' + userData?.last_name : ''}
            </Text>
            <View style={styles.cardNumberView}>
              <Text style={styles.cardText}>5678</Text>
              <Text style={styles.cardText}>5678</Text>
              <Text style={styles.cardText}>5678</Text>
              <Text style={styles.cardText}>5678</Text>
            </View>
            <View style={styles.cardNumberViewSec}>
              <Text style={styles.cardTextSec}>Thru:12/20</Text>
              <Text style={styles.cardTextSec}>CVV:456</Text>
            </View>
            <Image source={images.visa} style={styles.aspireLogo} />
          </View>
          <View style={styles.tabbar}>
            <Image source={images.insight} style={styles.tabLogo} />
            <View style={styles.textView}>
              <Text style={styles.tabHText}>Top-up account</Text>
              <Text style={styles.tabDText}>
                Deposit money to your account to use with card
              </Text>
            </View>
          </View>
          <View style={styles.tabbar}>
            <Image source={images.Transfer} style={styles.tabLogo} />
            <View style={styles.textView}>
              <Text style={styles.tabHText}>Weekly spending limit</Text>
              <Text style={styles.tabDText}>
                You haven’t set any spending limit on card
              </Text>
            </View>
            <Switch
              trackColor={{false: '#EEEEEE', true: '#00D657'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.tabbar}>
            <Image source={images.Transfer2} style={styles.tabLogo} />
            <View style={styles.textView}>
              <Text style={styles.tabHText}>Freeze card</Text>
              <Text style={styles.tabDText}>
                Your debit card is currently active
              </Text>
            </View>
            <Switch
              trackColor={{false: '#EEEEEE', true: '#00D657'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.tabbar}>
            <Image source={images.Transfer3} style={styles.tabLogo} />
            <View style={styles.textView}>
              <Text style={styles.tabHText}>Deactivated cards</Text>
              <Text style={styles.tabDText}>
                Your previously deactivated cards
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default DebitCard;

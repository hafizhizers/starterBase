import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Logo from '../../../assets/icons/Logo.svg';
import {Button} from '../../../components/button';

const Module1 = () => {
  const [buttonPress, setButtonPress] = useState(false);
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Button
        title="hafiz"
        iconLeft={<Logo width={20} height={20} fill={'red'} />}
        isSelected={buttonPress}
        onPress={() => {
          setButtonPress(!buttonPress);
        }}
      />
    </SafeAreaView>
  );
};

export default Module1;

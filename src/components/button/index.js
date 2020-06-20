import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Typography, Colors} from '../../themes';

const baseButton = {
  height: 50,
  width: 200,
  borderRadius: 10,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
};

const baseText = {
  fontSize: Typography.SMALL,
};

const styles = StyleSheet.create({
  button: {
    ...baseButton,
    backgroundColor: Colors.PRIMARY,
  },
  buttonText: {
    ...baseText,
    color: Colors.TEXT_PRIMARY,
  },
  buttonTextUnselected: {
    ...baseText,
    color: Colors.WHITE,
  },
  buttonUnselected: {
    ...baseButton,
    backgroundColor: Colors.PRIMARY_DARK,
  },
});

export const Button = (props) => {
  const {
    onPress,
    title,
    isSelected,
    customStyles,
    customTextStyles,
    iconLeft,
    iconRight,
  } = props;

  const selectedStyles = isSelected
    ? {button: [styles.button], text: [styles.buttonText]}
    : {
        button: [styles.button, styles.buttonUnselected],
        text: [styles.buttonTextUnselected],
      };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[customStyles, selectedStyles.button]}>
      {iconLeft}
      <Text style={[customTextStyles, selectedStyles.text]}>
        Hello, {title}
      </Text>
      {iconRight}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  customStyles: PropTypes.instanceOf(Object),
  customTextStyles: PropTypes.instanceOf(Object),
  iconLeft: PropTypes.instanceOf(Object),
  iconRight: PropTypes.instanceOf(Object),
};

Button.defaultProps = {
  title: 'Title',
  isSelected: false,
  customStyles: null,
  customTextStyles: null,
  iconLeft: null,
  iconRight: null,
};

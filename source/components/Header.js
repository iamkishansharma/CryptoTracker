import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({
  title,
  titleColor,
  backgroundColor,
  hasButton,
  buttonIcon,
  buttonColor,
  onPress,
}) {
  return (
    <View
      style={[
        styles.headerContaner,
        {backgroundColor: backgroundColor ? backgroundColor : 'white'},
      ]}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Icon name="menu" size={30} />
        <Text style={[styles.title, {color: titleColor ? titleColor : 'red'}]}>
          {title}
        </Text>
      </View>
      {hasButton ? (
        <TouchableOpacity onPress={onPress}>
          <Icon name={buttonIcon} size={30} color={buttonColor} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContaner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginStart: 10,
  },
});

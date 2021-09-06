import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../styles';
import {SvgXml} from '../svg-xml/svg-xml';

export const BellIcon = () => {
  return (
    <View style={styles.root}>
      <SvgXml xml="bellXml" />
      <View style={styles.noti}>
        <Text style={styles.text}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    position: 'relative',
  },
  noti: {
    position: 'absolute',
    backgroundColor: '#e85c4c',
    borderRadius: 100,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
    right: 1,
    borderWidth: 1,
    borderColor: Colors.default,
  },
  text: {
    fontSize: 10,
    color: Colors.default,
  },
});

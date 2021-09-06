import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles';

export const SearchInput = memo(() => {
  return (
    <View style={styles.root}>
      <View style={styles.inputBox}>
        <View style={styles.icon}>
          <Icon name="search" color={Colors.default} size={25} />
        </View>
        <TextInput placeholder="Փնտրել" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.default,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 100,
    padding: 10,
  },
  icon: {
    paddingHorizontal: 5,
  },
});

import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {P, SearchInput} from '../../../components';
import {Colors} from '../../../styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../navigation/user/user';

type Props = NativeStackScreenProps<UserStackParamList, 'Home'>;

export const HomeScreen: FC<Props> = () => {
  return (
    <View style={styles.root}>
      <SearchInput />
      <P>Home</P>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  P: {
    color: '#fff',
    marginVertical: 0,
  },
  searchTable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.default,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  button: {
    borderRadius: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 15,
    width: '90%',
    alignItems: 'center',
  },
  searchLabel: {
    marginVertical: 0,
    marginLeft: 15,
    color: Colors.default,
  },
  scrollBox: {
    backgroundColor: '#ECEDF1',
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  sectionBox: {
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  sectionText: {
    color: Colors.default,
    fontSize: 18,
    width: '70%',
    marginLeft: 5,
  },
});

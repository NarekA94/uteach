import React, {FC} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {P, Card, SvgXml} from '../../../components';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../navigation/user/user';

type Props = NativeStackScreenProps<UserStackParamList, 'Home'>;

export const HomeScreen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.searchTable}>
        <P style={styles.P}>Փնտրեք ձեզ համար լավագույն բժշկին</P>
        <P style={styles.P}>կամ բժշկական հաստատությունը</P>
        <Pressable style={styles.button} onPress={() => {}}>
          <Icon name="search" color={Colors.default} size={25} />
          <P color={Colors.default} style={styles.searchLabel}>
            Մասնագիտություն / Բժշկի անուն / Բժշկական կենտրոն
          </P>
        </Pressable>
      </View>
      <View style={styles.scrollBox}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBox}>
            <SvgXml xml="doctorXml" />
            <Text style={[styles.sectionText]}>
              Մասնագիտություններ / Բաժիններ
            </Text>
          </View>
          <Card xml="registrationXml" body="Առցանց հերթագրում" />
          <Card
            xml="hospitalXml"
            body="Բժշկական կենտրոններ"
            onPress={() => navigation.navigate('TabNavigator')}
          />
          <Card xml="historyXml" body="Բժշկական պատմություն" />
          <Card xml="laptopXml" body="Հեռաբժշկություն" />
          <Card xml="bagXml" body="Մեր մասին" />
          <Card xml="profileXml" body="Իմ պրոֆիլը" />
          <Card disabled xml="sosXml" body="SOS" />
          <Card disabled xml="newsXml" body="Բժշկական նորություններ" />
        </ScrollView>
      </View>
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

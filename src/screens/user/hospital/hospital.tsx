import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {ListItem, SvgXml, H3} from '../../../components';
import {Colors} from '../../../styles';
import {TabsHospital} from './tabs-hospital';
const hospitalBig = require('../../../assets/images/hospital-big.png');
const testHospitalImage = require('../../../assets/images/test-hospital.png');

export const HospitalScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={hospitalBig} />
      <ListItem
        image={testHospitalImage}
        continerStyle={styles.item}
        textStyle={styles.itemBody}
        body="Արաբկիր բժշկական համալիր"
      />
      <View style={styles.callBox}>
        <H3 style={styles.address}>
          Երևան Մամիկոնյանց փող., 30 շենք (Արաբկիր վարչ. շրջան)
        </H3>
        <Pressable onPress={() => {}}>
          <SvgXml xml="phoneIconXml" />
        </Pressable>
      </View>
      <TabsHospital />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.default,
    marginBottom: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  itemBody: {
    color: Colors.white,
    marginLeft: 20,
  },
  callBox: {
    backgroundColor: Colors.default,
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    color: Colors.white,
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 24,
    paddingHorizontal: 10,
  },
});

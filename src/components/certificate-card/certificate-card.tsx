import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml, VectorIcon} from '..';

const certificate = require('../../assets/images/certificate2.png');

export const CertificateCard = () => {
  return (
    <View>
      <Image source={certificate} />
      <View style={styles.menu}>
        <TouchableOpacity style={styles.row}>
          <VectorIcon
            groupName="Ion"
            size={25}
            color="#000000"
            name="ios-share-social"
          />
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <SvgXml xml="downloadXml" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  share: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

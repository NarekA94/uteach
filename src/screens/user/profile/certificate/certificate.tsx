import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CertificateCard} from '../../../../components';

export const CertificateScreen = () => {
  return (
    <View style={styles.root}>
      <CertificateCard />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
});

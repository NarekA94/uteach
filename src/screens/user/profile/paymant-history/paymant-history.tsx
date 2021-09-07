import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {PaymentCard} from '../../../../components';

export const PaymentHistory: FC = () => {
  return (
    <View style={styles.root}>
      <PaymentCard />
      <PaymentCard status="payed" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    backgroundColor: '#F4F5F8',
    flex: 1,
    paddingVertical: 15,
  },
});

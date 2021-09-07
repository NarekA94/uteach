import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {P, SvgXml} from '..';
import {Colors} from '../../styles';

interface Props {
  status?: string;
}

export const PaymentCard: FC<Props> = ({status}) => {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <P style={styles.p}>Ամսաթիվ</P>
        <P style={{color: Colors.black}}>22.03.2021</P>
      </View>
      <View style={styles.row}>
        <P style={styles.p}>Գումար</P>
        <P>6000 դր.</P>
      </View>
      <View style={styles.row}>
        <P style={styles.p}>Կարգավիճակ</P>
        <P style={[styles.status, status === 'payed' && styles.payed]}>
          {`Վճարված ${(status !== 'payed' && 'չ') || ''}է`}
        </P>
      </View>
      {status === 'payed' && (
        <Pressable style={styles.download}>
          <View style={styles.hr} />
          <SvgXml xml="downloadXml" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingBottom: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  p: {
    color: '#444960',
    marginVertical: 0,
  },
  status: {
    color: '#D25B4E',
    fontSize: 16,
  },
  hr: {
    height: 1,
    backgroundColor: '#F4F5F8',
    marginBottom: 10,
    marginTop: 5,
  },
  download: {
    paddingHorizontal: 5,
  },
  payed: {
    color: Colors.button,
  },
});

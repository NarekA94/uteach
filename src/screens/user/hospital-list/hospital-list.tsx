import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem} from '../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../navigation/user/user';

const astghik = require('../../../assets/images/astghik.png');
const testHospitalImage = require('../../../assets/images/test-hospital.png');

type Props = NativeStackScreenProps<UserStackParamList>;

export const HospitalListScreen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ListItem
        body="Արաբկիր բժշկական համալիր"
        onPress={() => navigation.navigate('Hospital')}
        image={testHospitalImage}
      />
      <ListItem image={astghik} body="ԱՍՏՂԻԿ բժշկական կենտրոն" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

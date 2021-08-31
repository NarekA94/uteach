import React, {FC, memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHeaderHeight} from '@react-navigation/elements';
import {Colors} from '../../styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  name: string;
}

export const Header: FC<Props> = memo(props => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: headerHeight,
        ...styles.root,
      }}>
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color={Colors.default} size={40} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props?.name}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  headerBox: {
    marginTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: Colors.default,
    marginLeft: 10,
  },
});

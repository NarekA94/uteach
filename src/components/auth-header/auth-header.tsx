import React, {FC, memo} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHeaderHeight} from '@react-navigation/elements';
import {Colors} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {SvgXml, BellIcon} from '../../components';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  name: string;
}

export const AuthHeader: FC = memo(() => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        height: headerHeight,
        ...styles.root,
      }}>
      <View style={styles.headerBox}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.goback} onPress={goBack}>
            <Icon name="chevron-left" color={Colors.default} size={45} />
          </TouchableOpacity>
          <SvgXml xml="miniLogoXml" />
        </View>
        <View style={styles.row}>
          <Zocial
            style={styles.icon}
            name="email"
            color={Colors.default}
            size={28}
          />
          {/* <Icon
            name="bell"
            style={styles.icon}
            color={Colors.default}
            size={30}
          /> */}
          <BellIcon />
          <Feather
            style={styles.icon}
            name="menu"
            color={Colors.default}
            size={30}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  goback: {
    marginRight: 5,
  },
  headerBox: {
    marginTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    color: Colors.default,
    marginLeft: 10,
  },
});

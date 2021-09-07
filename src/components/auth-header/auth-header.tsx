import React, {FC, memo} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHeaderHeight} from '@react-navigation/elements';
import {Colors} from '../../styles';
import {BellIcon} from '../../components';

export const AuthHeader: FC<any> = memo(props => {
  const headerHeight = useHeaderHeight();

  const goBack = () => {
    if (props?.navigation?.canGoBack()) {
      props?.navigation?.goBack();
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
            <Icon name="chevron-left" color={Colors.white} size={45} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{props?.label || ''}</Text>
        </View>
        <View style={styles.row}>
          <BellIcon />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    backgroundColor: Colors.default,
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
    fontSize: 18,
    color: Colors.white,
    marginLeft: 5,
  },
});

import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SwipeableNotification} from '../../../components';

export const Notifications = () => {
  const renderItem = () => <SwipeableNotification />;
  const separator = () => <View style={styles.separator} />;
  return (
    <View style={styles.continer}>
      <FlatList
        data={new Array(6).fill('null')}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    backgroundColor: '#F4F5F8',
    flex: 1,
    paddingVertical: 20,
  },
  separator: {
    height: 7,
  },
});

import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const cardImage = require('../../assets/images/mathematics.png');

export const VideoCard = memo(() => {
  return (
    <View style={styles.root}>
      <Image source={cardImage} />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
  },
});

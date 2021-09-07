import React, {FC, memo} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';
import {H3} from '../h3/h3';
import {P} from '../p/p';

const cardImage = require('../../assets/images/mathematics.png');
const videoUser = require('../../assets/images/video-user.png');
interface Props {
  onPress?: () => void;
  profile?: boolean;
}

export const VideoCard: FC<Props> = memo(props => {
  return (
    <Pressable onPress={props?.onPress} style={styles.root}>
      <Image source={cardImage} />
      <View style={styles.user}>
        <Image source={videoUser} />
        <P style={styles.name}>Հովհաննես Աբրահամյան</P>
      </View>
      <View style={[styles.userInfo, {borderBottomWidth: +!props.profile}]}>
        <H3 style={styles.h3}>
          Որոշեք ռուսերենի իմացության ձեր մակարդակը։ Որոշեք ռուսերեն իմացության
          ձեր մակարդակը
        </H3>
      </View>

      {!props.profile ? (
        <View style={styles.priceBox}>
          <P>1ժամ 8րոպե</P>
          <P style={styles.textBold}>12.000 դր</P>
          <H3 style={{color: Colors.default, ...styles.textBold}}>6000 դր.</H3>
        </View>
      ) : (
        <P style={styles.duration}>Տեւողությունը՝ 1ժ. 8ր.</P>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 10,
  },
  userInfo: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E4E8F2',
  },
  user: {
    padding: 10,
    flexDirection: 'row',
  },
  name: {
    marginLeft: 15,
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  h3: {
    fontWeight: 'bold',
    padding: 20,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    alignItems: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  duration: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

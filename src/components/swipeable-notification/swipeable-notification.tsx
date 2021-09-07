import React, {FC} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Avatar, P, VectorIcon, H3} from '..';
import {Colors} from '../../styles';

interface Props {
  onDeletePress?: () => void;
}

export const SwipeableNotification: FC<Props> = props => {
  const rightSwipeActions = () => {
    return (
      <View style={styles.root}>
        <Pressable onPress={props.onDeletePress} style={styles.deleteItemBox}>
          <VectorIcon groupName="Ion" name="trash" size={25} color="#D25B4E" />
        </Pressable>
      </View>
    );
  };
  return (
    <>
      <Swipeable renderRightActions={rightSwipeActions}>
        <View style={styles.container}>
          <View style={styles.head}>
            <View style={styles.row}>
              <Avatar continerStyle={styles.avatar} />
              <H3 style={styles.h3}>Հովհաննես Աբրահամյան</H3>
            </View>
            <H3 style={styles.h3}>18.05.21</H3>
          </View>
          <P style={styles.p}>
            'Մասնակցելով այս դասընթացին դուք Ձեռք կբերեք հիմնարար գիտելիքներ
            և...'
          </P>
        </View>
      </Swipeable>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
  root: {
    width: 70,
    paddingLeft: 5,
    marginRight: 10,
  },
  deleteItemBox: {
    backgroundColor: '#ECEDF1',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -5,
    justifyContent: 'space-between',
  },
  h3: {
    fontSize: 14,
    marginLeft: 5,
    color: '#000000',
  },
  avatar: {width: 34, height: 34},
  p: {
    fontSize: 14,
    color: '#444960',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

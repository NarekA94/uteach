import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '..';
import {Colors} from '../../styles';
import {H3} from '../h3/h3';
import {P} from '../p/p';

export const TestCard: FC = memo(() => {
  return (
    <View style={styles.root}>
      <View style={styles.userInfo}>
        <H3 style={styles.h3}>
          Որոշեք ռուսերենի իմացության ձեր մակարդակը։ Որոշեք ռուսերեն իմացության
          ձեր մակարդակը
        </H3>
        <P style={styles.time}> 6 հարց / Տևողություն ՝ 5 րոպե</P>
        <P>
          Մասնակցելով այս դասընթացին դուք Ձեռք կբերեք հիմնարար գիտելիքներ և
          կստանաք հնարավորություն մասնակցելու պրկատիկայի...
        </P>
        <Button width="70%" onPress={() => {}} body="Անցնել թեստ" />
      </View>
    </View>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  time: {
    fontWeight: 'bold',
    color: Colors.black,
  },
});

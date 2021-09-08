import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, H3, ListItem} from '../../../components';
import {Colors} from '../../../styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {UserStackParamList} from '../../../navigation/user/user';

type Props = NativeStackScreenProps<UserStackParamList>;

export const Profile: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.avatarBox}>
        <View style={styles.image}>
          <Avatar />
          <H3 style={styles.h3}>Տիգրան Գրիգորյան</H3>
        </View>
      </View>
      <View style={styles.items}>
        <ListItem
          onPress={() => navigation.navigate('UserInfo')}
          groupName="Aw"
          iconName="user"
          body="Անձնական տվյալներ"
        />
        <ListItem
          onPress={() => navigation.navigate('ProfileVideoLesson')}
          body="Իմ վիդեոդասերը"
        />
        <ListItem
          onPress={() => navigation.navigate('Notifications')}
          iconXml="bellIconXml"
          body="Ծանուցումներ"
        />
        <ListItem
          onPress={() => navigation.navigate('PaymentHistory')}
          iconXml="cardXml"
          body="Վճարման պատմություն"
        />
        <ListItem
          onPress={() => navigation.navigate('Certificate')}
          iconXml="certificateXml"
          body="Իմ հավաստագրերը"
        />
        <ListItem
          groupName="Ion"
          iconName="settings-sharp"
          body="Կարգավորումներ"
        />
        <View style={styles.hr} />
        <ListItem iconXml="logoutXml" body="Դուրս գալ" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: Colors.default,
    height: 70,
  },
  image: {bottom: -10, alignItems: 'center'},
  h3: {
    fontWeight: 'bold',
  },
  items: {
    marginTop: 120,
    paddingHorizontal: 33,
  },
  hr: {
    backgroundColor: Colors.default,
    height: 1,
    marginVertical: 20,
    width: '96%',
    alignSelf: 'center',
  },
});

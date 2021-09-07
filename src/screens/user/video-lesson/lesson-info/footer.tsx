/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {List} from 'react-native-paper';
import {Colors} from '../../../../styles';
import {styles} from './styles';
import {Button, H3, P} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
const examples = ['Ի՞նչ է SEO-ն։', 'Որոնողական համակարգեր', 'Ի՞նչ է SEO-ն։'];
const certificate = require('../../../../assets/images/certificate.png');
const manushak = require('../../../../assets/images/manushak.png');

export const ListFooterComponent = () => {
  const navigation = useNavigation();
  const renderAccordion = () =>
    examples.map((item, index) => (
      <View
        style={{
          borderWidth: 1,
          borderColor: '#A5A5A5',
          borderRadius: 5,
          marginBottom: 5,
        }}>
        <List.Accordion
          style={styles.accordion}
          title={item}
          left={props => {
            console.log(props);
            return (
              <Text style={{color: props.color}} {...props}>{`${
                index + 1
              }.`}</Text>
            );
          }}>
          <List.Item
            left={props => (
              <List.Icon {...props} icon="video" color={Colors.black} />
            )}
            onPress={() => navigation.navigate('VideoLesson')}
            style={{backgroundColor: Colors.white}}
            titleStyle={{color: Colors.black}}
            title="First item"
          />
          <List.Item
            left={props => (
              <List.Icon {...props} icon="video" color={Colors.black} />
            )}
            style={{backgroundColor: Colors.white}}
            titleStyle={{color: Colors.black}}
            title="Second item"
          />
        </List.Accordion>
      </View>
    ));
  return (
    <Fragment>
      <View style={styles.content}>
        <View style={[styles.aboutBox, {backgroundColor: Colors.white}]}>
          <H3 style={styles.h3}>Դասընթացի բովանդակությունը</H3>
          <P>8 բաժին . Տևողությունը ՝ 1ժամ 8րոպե</P>
        </View>
        <View style={styles.accordions}>{renderAccordion()}</View>
      </View>
      <View style={styles.certificate}>
        <H3
          style={{
            ...styles.h3,
            ...{textAlign: 'center', width: '80%', marginBottom: 20},
          }}>
          Անցեք թեստը հավաստագիր ստանալու համար
        </H3>
        <ImageBackground style={styles.image} source={certificate}>
          <Button body="Անցնել թեստ" width="70%" onPress={() => {}} />
        </ImageBackground>
      </View>
      <View style={[styles.section, {backgroundColor: Colors.white}]}>
        <H3
          style={{
            ...styles.h3,
            ...{textAlign: 'center', width: '80%', marginBottom: 20},
          }}>
          Դասավանդողի մասին
        </H3>
        <View style={styles.specialist}>
          <Image source={manushak} />
          <View style={{marginTop: -20, marginLeft: 15}}>
            <H3 style={styles.h3}>Մանուշակ Աբրահամյան</H3>
            <P style={{marginVertical: 0}}>Մանուշակ Աբրահամյան</P>
          </View>
        </View>
        <P>
          Եթե ինչ-որ բան լավ չեք հասկացել, ոչ մի խնդիր չկա, չէ՞ որ գնելուց հետո
          այս դասընթացը Ձեր սեփականությունն է, և Դուք կարող եք այն վերանայել։
          Բացի այդ, եթե կունենաք հարցեր, վստահ եղեք, դրանք անպատասխան չեն մնա։
        </P>
      </View>
    </Fragment>
  );
};

import React, {memo, useState} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {TabHeader, ListItem} from '../../../components';
import {sections} from './items';
const initialLayout = {width: Dimensions.get('window').width};

const TabList = memo(() => {
  return (
    <>
      {sections.map((section, index) => (
        <ListItem
          key={index}
          showRigthIcon={true}
          continerStyle={styles.list}
          body={section.name}
        />
      ))}
    </>
  );
});

export const TabsHospital = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: 'Մեր մասին'},
    {key: 'doctors', title: 'Բժիշկներ'},
    {key: 'sections', title: 'Բաժիններ'},
  ]);

  const renderScene = SceneMap({
    about: TabList,
    doctors: () => <Text>1</Text>,
    sections: () => <Text>2</Text>,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={TabHeader}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
});

import React, {Fragment, FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './tabHeader.styles';

export const TabHeader: FC<any> = props => {
  const routes = props.navigationState.routes;
  return (
    <Fragment>
      <View style={{...styles.root, ...props.rootStyle}}>
        {routes.map((route: any, index: any) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => {
              props.jumpTo(route.key);
            }}>
            <Text
              style={[
                styles.text,
                index === props.navigationState.index && styles.active,
              ]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Fragment>
  );
};

import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: 'transparent',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: Fonts.default,
  },
  active: {
    color: Colors.default,
  },
});

export default styles;

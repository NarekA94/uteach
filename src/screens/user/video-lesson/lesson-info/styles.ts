import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../styles';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    backgroundColor: Colors.default,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  h1: {
    fontSize: 22,
    color: '#ffff',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#ffff',
    marginRight: 10,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  aboutBox: {
    paddingHorizontal: 29,
    paddingVertical: 24,
    backgroundColor: '#F4F5F8',
  },
  dot: {
    backgroundColor: Colors.default,
    width: 6,
    height: 6,
    borderRadius: 100,
  },
  item: {
    paddingHorizontal: 29,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginVertical: 1,
    marginLeft: 10,
    fontSize: 17,
  },
  flatContent: {backgroundColor: '#F4F5F8'},
  content: {
    marginTop: 20,
  },
  accordions: {
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
    marginTop: -20,
  },
  accordion: {
    backgroundColor: Colors.white,
    paddingHorizontal: 17,
    // borderWidth: 1,
    // borderColor: '#A5A5A5',
    borderRadius: 5,
    marginBottom: 5,
  },
  h3: {
    color: '#1D1D1D',
  },
  certificate: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 29,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 170,
    alignSelf: 'center',
  },
  specialist: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 60,
  },
});

import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: '#BDBDBD',
    height: height,
  },
  top: {
    height: height / 3,
    width,
    backgroundColor: 'grey',
  },
  title: {
    top: 30,
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
  },
  card: {
    marginTop: 100,
    height: 350,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  note: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

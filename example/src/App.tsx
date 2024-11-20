import { StyleSheet, View } from 'react-native';
import Slide360View from '@garlicbed/react-native-slide360';

import Chair0 from '../res/0.png';
import Chair1 from '../res/1.png';
import Chair2 from '../res/2.png';
import Chair3 from '../res/3.png';
import Chair5 from '../res/5.png';
import Chair6 from '../res/6.png';
import Chair7 from '../res/7.png';
import Chair8 from '../res/8.png';

const IMAGES = [Chair0, Chair1, Chair2, Chair3, Chair5, Chair6, Chair7, Chair8];

export default function App() {
  return (
    <View style={styles.container}>
      <Slide360View images={IMAGES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

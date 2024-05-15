import { Button, Image, Text, View } from 'react-native';
import { styles } from '../Home/style'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image style={styles.homeImg} source={require('../../../assets/homeImg.svg')}></Image>
      <Text>Gets things with TODs</Text>
      <Text>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
      <Button onPress={()=>navigation.navigate('Auth')} title='Get started'></Button>
      </View>
    </View>
  );
}


import { Button, Image, Text, View } from 'react-native';
import { styles } from '../Home/style'
import { useEffect } from 'react';
import * as Font from 'expo-font'

const loadFont = async () => {
  await Font.loadAsync({
    Poppins700: require('../../../fonts/Poppins-Bold.ttf'),
    Poppins400: require('../../../fonts/Poppins-Regular.ttf'),
    Poppins600: require('../../../fonts/Poppins-SemiBold.ttf'),
  })
}

export default function Home({ navigation }) {
  useEffect(() => {
    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.homeImg} source={require('../../../assets/homeImg.svg')}></Image>
        <Text style={styles.textGets}>Gets things with TODs</Text>
        <Text style={styles.textLorem}>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
        <Button style={styles.button} onPress={() => navigation.navigate('Auth')} title='Get started'></Button>
      </View>
    </View>
  );
}


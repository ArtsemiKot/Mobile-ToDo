import { Button, Text, View, TextInput } from 'react-native';
import { styles } from '../Reg/style'
import { useEffect } from 'react';
import * as Font from 'expo-font'

const loadFont = async () => {
    await Font.loadAsync({
        Poppins700: require('../../../fonts/Poppins-Bold.ttf'),
        Poppins400: require('../../../fonts/Poppins-Regular.ttf'),
        Poppins600: require('../../../fonts/Poppins-SemiBold.ttf'),
    })
}
export default function Reg({ navigation }) {
    useEffect(() => {
        loadFont();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textWelcome}>Welcome to Onboard! </Text>
                <Text style={styles.textLets}>Let’s help to meet up your tasks.</Text>
                <TextInput style={styles.input} placeholder='Enter your full name'></TextInput>
                <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
                <TextInput style={styles.input} placeholder='Enter Password'></TextInput>
                <TextInput style={styles.input} placeholder='Confirm password'></TextInput>
                <Button onPress={() => navigation.navigate('Home')} title='Register'></Button>
                <Text style={styles.textAlready}>Already have an account ? <Text style={styles.sign} onPress={() => navigation.navigate('Auth')}>Sign In</Text></Text>
            </View>
        </View>
    );
}
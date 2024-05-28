import { Button, Image, Text, View, TextInput } from 'react-native';
import { styles } from '../Auth/style'

export default function Auth({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textWelcome}>Welcome back</Text>
                <Image style={styles.homeImg} source={require('../../../assets/people.svg')}></Image>
                <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
                <TextInput style={styles.input} placeholder='Enter Password'></TextInput>
                <Text style={styles.textForget}>Forget password?</Text>
                <Button onPress={() => navigation.navigate('Main')} title='Login'></Button>
                <Text style={styles.textAccount}>Don’t have an account ? <Text onPress={() => navigation.navigate('Reg')} style={styles.sign_up}>Sign Up</Text></Text>
            </View>
        </View>
    );
}

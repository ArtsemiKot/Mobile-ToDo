import { Button, Image, Text, View, TextInput } from 'react-native';
import { styles } from '../Auth/style'

export default function Auth({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Welcome back</Text>
                <Image style={styles.homeImg} source={require('../../../assets/people.svg')}></Image>
                <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
                <TextInput style={styles.input} placeholder='Enter Password'></TextInput>
                <Text>Forget password?</Text>
                <Button onPress={() => navigation.navigate('Reg')} title='Login'></Button>
                <Text>Don’t have an account ? Sign Up</Text>
            </View>
        </View>
    );
}

import { Button, Text, View, TextInput } from 'react-native';
import { styles } from '../Reg/style'

export default function Reg({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Welcome to Onboard! </Text>
                <Text>Let’s help to meet up your tasks.</Text>
                <TextInput style={styles.input} placeholder='Enter your full name'></TextInput>
                <TextInput style={styles.input} placeholder='Enter your Email'></TextInput>
                <TextInput style={styles.input} placeholder='Enter Password'></TextInput>
                <TextInput style={styles.input} placeholder='Confirm password'></TextInput>
                <Button onPress={() => navigation.navigate('Home')} title='Register'></Button>
                <Text>Already have an account ? Sign In</Text>
            </View>
        </View>
    );
}
import { Text, View, Image } from 'react-native';
import styles from './style';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import ImgMain from '../../../assets/MainPicture.svg';
import ImgClock from '../../../assets/Clock.svg'
import ImgVector from '../../../assets/Vectorr.svg'

const loadFont = async () => {
    await Font.loadAsync({
        Poppins700: require('../../../fonts/Poppins-Bold.ttf'),
        Poppins400: require('../../../fonts/Poppins-Regular.ttf'),
        Poppins600: require('../../../fonts/Poppins-SemiBold.ttf'),
    })
}

function Main() {
    const [color1, setColor1] = useState(true)
    const [color2, setColor2] = useState(true)
    const [color3, setColor3] = useState(true)
    const [color4, setColor4] = useState(true)
    const [color5, setColor5] = useState(true)

    useEffect(() => {
        loadFont();
    }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.upContainer}>
                <Image style={styles.image} source={ImgMain} />
                <Text style={styles.welcome}>Welcome Jeegar goyani</Text>
            </View>
            <View style={styles.downContainer}>
                <View style={styles.bottomContent}>
                    <Text style={styles.task}>Task list</Text>
                    <Image style={styles.imgClock} source={ImgClock} />
                    <Text style={styles.good}>Good Afternoon</Text>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={styles.blockDaily}>
                        <Text style={styles.daily}>Daily Task</Text>
                        <Image style={styles.imgVector} source={ImgVector} />
                    </View>
                    <View style={styles.blockParagraphs}>
                        <View style={styles.learn1}>
                            <View style={{ border: '2px solid #000000', width: 17, height: 17, backgroundColor: color1 ? 'white' : '#50C2C9' }} onClick={() => setColor1(!color1)}></View>
                            <Text style={styles.text1}>Learning Programming by 12PM</Text>
                        </View>
                        <View style={styles.learn2}>
                            <View style={{ border: '2px solid #000000', width: 17, height: 17, backgroundColor: color2 ? 'white' : '#50C2C9' }} onClick={() => setColor2(!color2)}></View>
                            <Text style={styles.text2}>Learn how to cook by 1PM</Text>
                        </View>
                        <View style={styles.learn3}>
                            <View style={{ border: '2px solid #000000', width: 17, height: 17, backgroundColor: color3 ? 'white' : '#50C2C9' }} onClick={() => setColor3(!color3)}></View>
                            <Text style={styles.text3}>Learn how to play at 2PM</Text>
                        </View>
                        <View style={styles.learn4}>
                            <View style={{ border: '2px solid #000000', width: 17, height: 17, backgroundColor: color4 ? 'white' : '#50C2C9' }} onClick={() => setColor4(!color4)}></View>
                            <Text style={styles.text4}>Have lunch at 4PM</Text>
                        </View>
                        <View style={styles.learn5}>
                            <View style={{ border: '2px solid #000000', width: 17, height: 17, backgroundColor: color5 ? 'white' : '#50C2C9' }} onClick={() => setColor5(!color5)}></View>
                            <Text style={styles.text5}>Going to travel 6PM</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
}

export default Main;
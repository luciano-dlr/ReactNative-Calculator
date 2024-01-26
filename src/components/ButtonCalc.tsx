import { Text, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Button {
    text: string;
    color?: string;
}

export const ButtonCalc = ({ text, color = '#2D2D2D' }: Button) => {

    return (

        <View style={{
            ...styles.btn,
            backgroundColor: color

        }}>
            <Text style={{
                ...styles.btnText,
                color:(color === '#9B9B9B') ? 'black' : 'white'
            }}> {text} </Text>
        </View>
    )
}


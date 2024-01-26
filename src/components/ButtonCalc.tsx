import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/appTheme";

interface Button {
    text: string;
    color?: string;
    large?: boolean;
    action: (numeroTexto:string) => void;
}

export const ButtonCalc = ({ text, color = '#2D2D2D', large = false, action }: Button) => {

    return (
        <TouchableOpacity 
        onPress={() => action(text)}
        >


            <View style={{

                ...styles.btn,
                backgroundColor: color,
                width: (large) ? 180 : 80

            }}>
                <Text style={{

                    ...styles.btnText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'

                }}> {text}
                </Text>

            </View>


        </TouchableOpacity>
    )
}


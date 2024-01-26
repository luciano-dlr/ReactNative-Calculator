import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';

export const CalculadoraScreen = () => {


    return (
        <View style={styles.calculadoraContainer}>

            <Text style={styles.smallResult}>1,500.00</Text>

            <Text style={styles.result}>1,500.00</Text>

            <View style={styles.btnContainer}>

                {/* Fila de Botones */}
                <ButtonCalc text='C' color='#9B9B9B' />

                <ButtonCalc text='+/-' color='#9B9B9B' />

                <ButtonCalc text='del' color='#9B9B9B' />

                <ButtonCalc text='/' color='#FF9427' />

            </View>

            <View style={styles.btnContainer}>

                {/* Fila de Botones */}
                <ButtonCalc text='7' />

                <ButtonCalc text='8' />

                <ButtonCalc text='9' />

                <ButtonCalc text='X' color='#FF9427' />

            </View>

            <View style={styles.btnContainer}>

                {/* Fila de Botones */}
                <ButtonCalc text='4' />

                <ButtonCalc text='5' />

                <ButtonCalc text='6' />

                <ButtonCalc text='-' color='#FF9427' />

            </View>

            <View style={styles.btnContainer}>

                {/* Fila de Botones */}
                <ButtonCalc text='1' />

                <ButtonCalc text='2' />

                <ButtonCalc text='3' />

                <ButtonCalc text='+' color='#FF9427' />

            </View>

            <View style={styles.btnContainer}>

                {/* Fila de Botones */}
                <ButtonCalc text='0' />

                <ButtonCalc text='0' />

                <ButtonCalc text='.' />

                <ButtonCalc text='=' color='#FF9427' />

            </View>

        </View>
    )
}




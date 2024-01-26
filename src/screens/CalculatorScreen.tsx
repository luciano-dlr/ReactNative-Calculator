import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const { 
        lastNumber,
        number,
        handleClean,
        positiveNegative,
        handleDel,
        handleSplit,
        handleNumber,
        handleMultiply,
        handleSubtract,
        handleAdd,
        calculate
    } = useCalculator()

    return (
        <View style={styles.calculadoraContainer}>

            {
                (lastNumber !== '0') && (

                    <Text style={styles.smallResult}>{lastNumber}</Text>

                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}

            </Text>

            <View style={styles.btnContainer}>

                <ButtonCalc text='C' color='#9B9B9B' action={handleClean} />

                <ButtonCalc text='+/-' color='#9B9B9B' action={positiveNegative} />

                <ButtonCalc text='del' color='#9B9B9B' action={handleDel} />

                <ButtonCalc text='/' color='#FF9427' action={handleSplit} />

            </View>

            <View style={styles.btnContainer}>

                <ButtonCalc text='7' action={handleNumber} />

                <ButtonCalc text='8' action={handleNumber} />

                <ButtonCalc text='9' action={handleNumber} />

                <ButtonCalc text='X' color='#FF9427' action={handleMultiply} />

            </View>

            <View style={styles.btnContainer}>

                <ButtonCalc text='4' action={handleNumber} />

                <ButtonCalc text='5' action={handleNumber} />

                <ButtonCalc text='6' action={handleNumber} />

                <ButtonCalc text='-' color='#FF9427' action={handleSubtract} />

            </View>

            <View style={styles.btnContainer}>

                <ButtonCalc text='1' action={handleNumber} />

                <ButtonCalc text='2' action={handleNumber} />

                <ButtonCalc text='3' action={handleNumber} />

                <ButtonCalc text='+' color='#FF9427' action={handleAdd} />

            </View>

            <View style={styles.btnContainer}>

                <ButtonCalc text='0' large action={handleNumber} />

                <ButtonCalc text='.' action={handleNumber} />

                <ButtonCalc text='=' color='#FF9427' action={calculate} />

            </View>

        </View>
    )
}




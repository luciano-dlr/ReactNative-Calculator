import { useRef, useState } from "react";

enum Operadores {
    add, subtract, multiply, split
}

export const useCalculator = () => {

    const [lastNumber, setLastNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operadores>()


    const handleClean = () => {
        setNumber('0');
        setLastNumber('0')
    }

    const handleNumber = (numberText: string) => {

        // No aceptar doble punto 
        if (number.includes('.') && numberText === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal 
            if (numberText === '.') {
                setNumber(number + numberText)

                // Evaluar si es otro cero, y hay un punto
            } else if (numberText === '0' && number.includes('.')) {

                setNumber(number + numberText)

                // Evaluar si es diferente de cero y no tiene un punto 
            }else if (numberText !== '0' && !number.includes('.')) {

                setNumber(numberText)

                // Evitar 0000.0
            }else if(numberText === '0' && !number.includes('0')){  

                setNumber(number)
            }else {
                setNumber(number + numberText)
            }

        } else {
            setNumber(number + numberText)
        }
    }

    const handleChangeNumberToPrevious = () =>{

        if(number.endsWith('.')) {

            setLastNumber(number.slice(0,-1));

        } else {

            setLastNumber(number);

        }
        setNumber('0');
    }

    const handleSplit = () =>{
        handleChangeNumberToPrevious()
        lastOperation.current = Operadores.split

    }
    const handleMultiply = () =>{
        handleChangeNumberToPrevious()
        lastOperation.current = Operadores.multiply

    }
    const handleSubtract = () =>{
        handleChangeNumberToPrevious()
        lastOperation.current = Operadores.subtract

    }
    const handleAdd= () =>{
        handleChangeNumberToPrevious()
        lastOperation.current = Operadores.add
        
    }

    const calculate = () => {

        const num1 = Number(number);
        const num2 = Number(lastNumber);

        switch (lastOperation.current) {
            case Operadores.add:

                setNumber(`${num1 + num2}`)

                break;
            case Operadores.subtract:

                setNumber(`${num2 - num1}`)

                break;
            case Operadores.split:

                setNumber(`${num2 / num1}`)

                break;
            case Operadores.multiply:

                setNumber(`${num1 * num2}`)

                break;

        }

        setLastNumber('0')

    }

    
    const handleDel = () => {

        //Leio
        (number.length === 1 || number.includes('-') && number.length === 2) 
        ? setNumber('0') 
        : setNumber(number.slice(0,-1))

        //Fer
        // let negativo = '';
        // let numeroTemp = number;
        // if (number.includes('-')){
        //     negativo = '-';
        //     numeroTemp = number.substring(1);
        // }
        // if (numeroTemp.length > 1){
        //     setNumber(number + numeroTemp.slice(0,-1));
        // } else {
        //     setNumber('0')
        // }

    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

  return {
    
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
  }
}



import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    btn: {
        height:80,
        width:80,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    btnText:{
        textAlign:'center',
        padding:12,
        fontSize:34,
        color:'white',
        fontWeight:'300'
    }
});



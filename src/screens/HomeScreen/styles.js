import { StyleSheet, Dimensions, } from 'react-native'

const styles = StyleSheet.create({
    imgBackground:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center',

    },
    searchBtn:{
        position:'absolute',
        top: 50,
        backgroundColor:'#ffffff',
        height:60,
        width:Dimensions.get('screen').width - 20,
        marginHorizontal:10,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    searchBtnTxt:{
        fontSize:16,
        fontWeight:'bold',
        margin:15,
    },
    title:{
        fontSize:80,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft: 25,
    },
    btn:{
        backgroundColor:'#04e704',
        marginLeft: 25,
        marginTop:25,
        width:200,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    btnTxt:{
        fontSize:16,
        fontWeight:'bold'
    },
})

export default styles
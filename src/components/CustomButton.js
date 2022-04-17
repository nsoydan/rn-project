import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText} >{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        width:'80%',
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius: 5,
        paddingHorizontal:10,
        marginVertical:5,
        alignItems:'center',   
    },
    buttonText:{
        color:'white',
        fontSize:35,
        margin:5,
    }
})

export default CustomButton
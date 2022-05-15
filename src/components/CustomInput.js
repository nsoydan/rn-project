import { View, TextInput,Text,StyleSheet } from 'react-native'
import React from 'react'


const CustomInput = ( {value,setValue,placeholder,secureTextEntry }  ) => {
  return (
    <View style={styles.container}>
      
        <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}>
        </TextInput>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'80%',
        height:50,
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius: 5,
        paddingHorizontal:10,
        marginVertical:5,
        


    },
    input:{


    }
})

export default CustomInput
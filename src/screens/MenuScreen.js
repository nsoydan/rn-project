import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ImageBackground } from 'react-native'
import React from 'react'



function MenuScreen ({navigation}){
  
  const yolHaritasiPressed=()=>{
    
    navigation.navigate('YolHaritasiListesiScreen');
  }

  
  
  return (
    <SafeAreaView style={styles.container}>
      
        <TouchableOpacity style={styles.to} onPress={yolHaritasiPressed} >
          <Text style={styles.text1}>Yol Haritası listesi</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.to} >
          <Text style={styles.text1}>Makbuz Kes</Text>
        </TouchableOpacity>
 
    </SafeAreaView>
  );
}

export default MenuScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'white',
      
    },
    text1:{
      justifyContent:'center',
      fontSize:25,
    },
    to:{
      backgroundColor:'yellow',
      borderWidth:3,
      borderRadius:25,
      margin:30,
      padding:30,
      alignItems:'center',
      
    }
})
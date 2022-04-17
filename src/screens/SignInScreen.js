import { View, Text,Image,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/images/dunya.gif'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


function SignInScreen({navigation}) {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState(''); 

    const onSignInPressed = () =>{
      console.log(username,password);
      navigation.navigate('MenuScreen');
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={Logo} style={styles.logo}/>
      <Text>"Daha yeşil bir dünya için..."</Text>
      
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Giriş" onPress={ onSignInPressed}/>
     
      </View>
    );
  }


  const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      alignItems: 'center',
    }
    
  })
  



  export default SignInScreen;
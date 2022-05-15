import { View, Text,Image,StyleSheet,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Logo from '../../assets/images/dunya.gif'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import TodoScreen from './TodoScreen';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {setupUser} from '../redux/userSlice';
import {setupToken} from '../redux/tokenSlice';


function SignInScreen({navigation}) {
    console.log("..............................................................sign in screen içinde"); 
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState(''); 
    //const [token , setToken]=useState('');
    //let [user ,setUser]=useState({});
    dispatch=useDispatch();
    //console.log(useSelector((state) => state.user));  

    const handleLogin=()=>{
 
    //   fetch('http://88.225.241.198:887/api/token/',{
    //     method:"POST",
    //     headers:{                 
    //         "content-type":"application/json",
    //     },
    //     body: JSON.stringify({
    //       username:username,
    //       password:password
    //     })
    // }).then(response=>response.json())
    // .then(data=>{
    //   //setToken(data.access);
    //   console.log("Token geldi...... 200 response geldi",data.access);
    //   dispatch(setupToken(data.access));
    //   navigation.navigate('TodoScreen',{token:token,username:username})
    // })
    // .catch(error=>console.log(error))

      axios({ 
        method: 'POST',
        url:"http://88.225.241.198:887/api/token/",
        data:{
          username:username,
          password:password
        }
      }).then(resp=>{
          //console.log("--------------------------------------------------------------",resp.data);
          if (resp.status == 200  ){
              console.log("status : ",resp.status);
              console.log("token ---->",resp.data.access);
              dispatch(setupToken(resp.data.access));
              navigation.navigate('TodoScreen', { username:username, token:resp.data.access} );
          }       
      })
      .catch(e=>console.log(e)
       
     
      )           
    }  
    
    

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Logo} style={styles.logo}/>
        <Text>"Daha yeşil bir dünya için..."</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text="Login"  onPress={handleLogin} />
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
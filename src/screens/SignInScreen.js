import { View, Text,Image,StyleSheet,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Logo from '../../assets/images/dunya.gif'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import TodoScreen from './TodoScreen';
import axios from 'axios'


function SignInScreen({navigation}) {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState(''); 
    const [token , setToken]=useState('');
    let [user ,setUser]=useState({});

    console.log("..............................................................sign in screen içinde"); 

    const handleLogin=()=>{

      axios({ 
        method: 'POST',
        url:"http://88.225.241.198:887/api/token/",
        data:{
          username:username,
          password:password
        }
      }).then(resp=>{
        
        axios({
          method: 'GET',
          url:"http://88.225.241.198:887/api/user/"+username,
          headers:{
            "content-type":"application/json",
            "Authorization":"Bearer "+resp.data.access 
          }
        }).then(response=>{
          user=response.data;
          console.log(user);  
        })
        .catch(e=>{
          Alert.alert("Sistem Hatası")
          console.log(e);})
        
        console.log("--------------------------------------------------------------");
        setToken(resp.data.access);
          if (resp.status == 200){
            console.log("status : ",resp.status);
            console.log("token ---->",resp.data.access);
            navigation.navigate('TodoScreen', { token:resp.data.access,user:user } );
          } 
      })
      .catch(e=>{console.log(e);
        Alert.alert("Kullanıcı adı ya da şifre hatalı");
      }
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
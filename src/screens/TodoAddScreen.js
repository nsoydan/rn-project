import { View, Text,Image,StyleSheet,Alert,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import Logo from '../../assets/images/dunya.gif'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import axios from 'axios'
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import {Permission,ImagePicker} from 'expo'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


function TodoAddScreen({navigation,route}) {

    




    const [firma,setFirma]=useState('');
    const [talep,setTalep]=useState(''); 
    //const [token , setToken]=useState('');
    let [sehir ,setSehir]=useState('');

    const token=useSelector((state)=>state.token.value)
    const user=useSelector((state)=>state.user.user.first_name)

    console.log("---TOKEN------------------->>>>>",token)
    console.log("---USER------------------->>>>>",user)

    
    const [image, setImage] = useState(null);

    const selectPicture=async ()=>{
      //await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const {cancelled,uri}=await ImagePicker.launchImageLibraryAsync({
        aspect:1,
        allowsEditing:true
      });
      setImage({uri})

    }

    const takePicture=async()=>{
      //await Permissions.askAsync(Permissions.CAMERA);
      const {cancelled,uri}= await ImagePicker.launchCameraAsync({
        allowsEditing:false
      });
      setImage(uri)
    }






    // const pickImage = async () => {
    //   // No permissions request is necessary for launching the image library
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
  
    //   console.log(result);
      
    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
    
    
    // }
    
    
    
    
    const handleAddTodo=()=>{

      axios({
        method: 'POST',
        url:"http://88.225.241.198:887/api/todo",
        headers:{                 
          "content-type":"application/json",
          "Authorization":"Bearer "+token
        },
        data:{
            talepAciklama:talep,
            talepEden:user,
            sehir:sehir,
            firma:firma
        }

      }).then(resp=>{
        console.log(resp.status);
        navigation.navigate('TodoScreen');
      })
      .catch(e=>{console.log(e);
        Alert.alert("hata var");
      }
      )           
    }     

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Yeni Talep ekllemek için formu doldurunuz</Text>
        <CustomInput placeholder="firma" value={firma} setValue={setFirma} />
        <CustomInput placeholder="talep" value={talep} setValue={setTalep} />
        <CustomInput placeholder="sehir" value={sehir} setValue={setSehir} />
        <Button title='Resim seç'  onPress={selectPicture} />
        <Button title='Kamera'  onPress={takePicture} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <CustomButton text="Ekle"  onPress={handleAddTodo} />
     </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      alignItems: 'center',
    }
    
  })
  

  export default TodoAddScreen;